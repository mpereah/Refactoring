const fs = require('fs');

class reader{
    static readJsonFile(path){
        const raw = fs.readFileSync(path)
        return JSON.parse(rawdata)
    }
}

// const reader = require('./lib/utils/reader');
// const explorers = reader.readJsonFile("explorers.json");


module.exports = reader

