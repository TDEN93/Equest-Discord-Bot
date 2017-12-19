var sys = require('util')
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path')


var dirname = "/Discord_Bot/Replay";
var child;


// Read each file in the directory stored in dirname.
function decodeFile() {
    fs.readdir(dirname, function (err, files) {
        if (err) {
            throw err;
        }

        files.map(function (file) {
            return path.join(dirname, file);
        }).filter(function (file) {
            return fs.statSync(file).isFile();
        }).forEach(function (file) {

            // Parse the replay files to JSON.
            if (path.extname(file) === ".replay") {
                // executes `./rattletrap decode input.replay > output.json'
                try {
                    child = exec(`./rattletrap decode ${file} > ${file}.json`, function (error, stdout, stderr) {
                        console.log(`Successfully converted ${file} to ${file}.json`);
                    });
                } catch (err) {
                    console.log('exec error: ' + error);
                }
            }
        });
    });

}

decodeFile();

