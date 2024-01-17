const fs = require('fs');

const path = require('path');

const rootDirectory = require('../util/path');

const getDetailsFromFile = (cb) => {
    fs.readFile(path.join(rootDirectory, 'data', 'contactDetails.json'), (err, content) => {
        if(!err){
            cb(JSON.parse(content));
        }
        else {
            cb([]);
        }
    })
}

module.exports = class Contact{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    save(cb) {
        getDetailsFromFile((details) => {
            details.push(this);
            fs.writeFile(path.join(rootDirectory, 'data', 'contactDetails.json'), JSON.stringify(details), (err) => {
                if(!err){
                    cb();
                }
            });
        })
    }

    static fetchAll(cb){
        getDetailsFromFile(cb);
    }
}