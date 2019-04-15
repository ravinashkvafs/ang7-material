'user strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/users');
passport.use(new LocalStrategy({ usernameField: 'emailid' }, (emailid, password, cb) => __awaiter(this, void 0, void 0, function* () {
    const foundUser = yield User.findOne({ emailid: emailid.toLowerCase() }, { emailid: 1, password: 1, fullname: 1, role: 1, is_active: 1, project_code: 1 });
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
})));
passport.use(new JwtStrategy({ jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.TOKEN_CODE }, (jwtPayload, cb) => __awaiter(this, void 0, void 0, function* () {
    // console.log(jwtPayload);
    cb(null, jwtPayload);
})));
