var sys = require('util')
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');
var jsonFile = require('jsonfile');

var jsonDIR = '/Discord_Bot/Replay';

// Arrays
var availableReplays = [];


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
