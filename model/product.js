const fs = require('fs');

const path = require('path');

const rootDirectory = require('../util/path');


const getProducFromFile = (cb) => {
    fs.readFile(path.join(rootDirectory, 'data', 'products.json'), (err, content) => {
        if(!err) {
            cb(JSON.parse(content));
        }
        else {
            cb([]);
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save(cb){
        getProducFromFile((product) => {
            product.push(this);
            fs.writeFile(path.join(rootDirectory, 'data', 'products.json'), JSON.stringify(product), (err) => {
                if(!err){
                    cb();
                }
            })
        })
    }

    static fetchAll(cb){
        getProducFromFile(cb);
    }
}