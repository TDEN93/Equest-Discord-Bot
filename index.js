const botSettings = require("./botsettings.json");
const Discord = require('discord.js');
const Parse = require('./parse.js');

const bot = new Discord.Client({
    disableEveryone: true
});

let prefix = botSettings.prefix;

bot.on("ready", () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);

});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if (message.content.indexOf(botSettings.prefix) !== 0) return;


    // Parse arguments
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);


    // Display the number of available Replays
    if (command === `${prefix}replays`) {
        
        // If the number of replays does not exceed 10
        if (Parse.availReplay.length <= 10) {
            //Seperate each element of the array by double new-line.
            var replayString = Parse.availReplay.join("\n\n");
        } else {
            // Notify the user that there are too many replays to display.
            var replayString = "Too many replays";
        }

        message.channel.send({
            embed: {
                color: 3447003,
                title: "Link to Replay folder",
                url: "https://www.dropbox.com/sh/iz1ccenw11aqnzp/AAABerEXLdt29UxLKUBXCOhsa?dl=0",
                fields: [{
                        name: "Available Replays:  " + Parse.availReplay.length,
                        value: replayString
                            },

                        ],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: "eSports Research & Performance"
                }
            }
        });
    };
});


bot.login(botSettings.token);
