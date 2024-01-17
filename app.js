const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contact-us');
const successRoutes = require('./routes/success');

const errorControllers = require('./controllers/error');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);
app.use(successRoutes);

// for handling 404 page
app.use(errorControllers.get404);

app.listen(4000);