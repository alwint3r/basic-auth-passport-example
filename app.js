'use strict';

const express = require('express');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 8727;

(require('./passport'));

app.disable('x-powered-by');
app.use(passport.initialize());

app.get('/', passport.authenticate('basic', {session: false}), (req, res, next) => {
    res.json({
        message: 'Hello ' + req.user.username + '!',
        authenticated: req.isAuthenticated(),
        status: 200
    });
});

app.listen(PORT, () => {
    console.log('Node server is listening on port ' + PORT);
});
