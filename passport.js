'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

// You should never hardcode your credentials like this.
// This is just for example purpose.
const hardcodedCreds = {
    user: 'winter',
    pass: 'winter',
};

passport.use(new BasicStrategy((username, password, done) => {
    if (username !== hardcodedCreds.user)
        return done(null, false, { message: 'Username is not found '});

    if (password !== hardcodedCreds.pass)
        return done(null, false, { message: 'Password is incorrect' });

    return done(null, { username });
}));
