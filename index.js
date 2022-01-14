'use strict';
const http = require('http');
const alidns = require('./alidns.js');
const config = require('./config.json');

function main() {
    let targets = config.targets;
    for (let target of targets) {
        alidns.updateRecord(target, (msg) => {
            console.log(new Date() + ': [' + msg + '] ' + JSON.stringify(target));
        });
    }
}

main();
