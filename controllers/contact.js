const path = require('path');

const rootDirectory = require('../util/path');

const Contact = require('../model/contact');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'contact-us.html'));
}

exports.postContact = (req, res, next) => {
    const contact = new Contact(req.body.name, req.body.email);
    contact.save(() => {
        Contact.fetchAll((details) => {
            console.log(details);
            res.sendFile(path.join(rootDirectory, 'views', 'success.html'));
        });
    });
}