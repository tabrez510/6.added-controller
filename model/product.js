const fs = require('fs');

const path = require('path');

const rootDirectory = require('../util/path');


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save(cb){
        fs.readFile(path.join(rootDirectory, 'data', 'products.json'), (err, content) => {
            let products = [];
            if(!err){
                products = JSON.parse(content);
            }
            products.push(this);
            fs.writeFile(path.join(rootDirectory, 'data', 'products.json'), JSON.stringify(products), (err) => {
                if(!err){
                    console.log('SUCCESS');
                    cb();
                }
            })
        })
    }

    static fetchAll(cb){
        fs.readFile(path.join(rootDirectory, 'data', 'products.json'), (err, content) => {
            if(!err) {
                cb(JSON.parse(content));
            }
            else {
                cb([]);
            }
        })
    }
}