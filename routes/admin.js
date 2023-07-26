const path = require('path');

const express = require('express');

const router = express.Router();

const data = [];

router.get('/add-users', (req, res, next) => {
    res.render('add-users');
});

router.post('/adding-users', (req, res, next) => {
    data.push({username: req.body.username});
    res.redirect('/');
});

router.get('/', (req, res, next) => {
    res.render('main-page', {nick: data});
});

module.exports = {router, data};
