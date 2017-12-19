const botSettings = require("./botsettings.json");
const sys = require('util')
const fs = require('fs');
const exec = require('child_process').exec;
const path = require('path');
const jsonFile = require('jsonfile');

const jsonDIR = botSettings.replayPath;

// Arrays
let availableReplays = [];


function getReplays(){
    fs.readdir(jsonDIR, function (err, files) {
        files.forEach(function (file) {
            if (path.extname(file) === ".replay") {
                availableReplays.push(file);
            }
        });
    });
}


getReplays();

// Export availableReplays array for use in other files.
exports.availReplay = availableReplays;
