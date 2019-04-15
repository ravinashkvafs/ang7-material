'user strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");

const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('../models/users');

passport.use(new LocalStrategy({ usernameField: 'emailid' }, async (emailid, password, cb) => {
    const foundUser = await User.findOne({ emailid: emailid.toLowerCase() }, { emailid: 1, password: 1, fullname: 1, role: 1, is_active: 1, project_code: 1 });

    if (foundUser) {
        if (foundUser.is_active)
            foundUser.comparePassword(password, (err, isMatched) => {
                if (err)
                    return cb(null, { success: false, status: 501, message: "Some Error Occured !", err });
                if (isMatched)
                    return cb(null, { success: true, foundUser });
                else
                    return cb(null, { success: false, status: 400, message: "Password Incorrect !" });
            });
        else
            return cb(null, { success: false, status: 401, message: "User Is Not Permitted To Login !" });
    }
    else
        return cb(null, { success: false, status: 404, message: "User Doesn't Exists !" });
}));

passport.use(new JwtStrategy({ jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.TOKEN_CODE }, async (jwtPayload, cb) => {
    // console.log(jwtPayload);
    cb(null, jwtPayload);
}));