const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRouter.router);

app.get('/', (req, res, next) => {
    const data = adminRouter.data;
    res.render('main-page', {nick: data, pageTitle: 'List of users', path: '/'});
});

app.use((req, res, next) => {
    res.render('404', {pageTitle: '404', path: 'nothing'});
});

app.listen(3000);