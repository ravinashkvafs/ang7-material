'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('express-promise-router')();
const passport = require('passport');
const _ = require('lodash');
const User = require('../models/users');
const resS = require('../utility/sendFormat');
const Verify = require('../utility/verify');
const dateFormat = require('../utility/date_format');
const passportLocal = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false });
Router.route('/')
    .get(passportJwt, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    resS.send(res, "Password Resetted Successfully !", req['user']);
}));
Router.route('/basicInfo')
    .get(passportJwt, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const foundUser = yield User.findById(req['user']['_id'], { _id: 0, fullname: 1, designation: 1, gender: 1 });
    resS.send(res, "User Found Successfully !", foundUser);
}));
Router.route('/resetPassword')
    .get(passportJwt, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const foundUser = yield User.findById(req['user']['_id'], { password: 1 });
    foundUser.password = req['user']['emailid'] + '@123';
    req['user']['foundUser'] = yield foundUser.save();
    resS.send(res, "Password Resetted Successfully !", req['user']['foundUser']);
}));
Router.route('/changePassword')
    .put(passportJwt, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const foundUser = yield User.findById(req['user']['_id'], { password: 1 });
    foundUser.password = req.body.newPassword;
    req['user']['foundUser'] = yield foundUser.save();
    resS.send(res, "Password Changed Successfully !", req['user']['foundUser']);
}));
Router.route('/auth/login')
    .post(passportLocal, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (req['user']['success']) {
        delete req['user']['success'];
        const token = Verify.getToken({ _id: req['user']['foundUser']._id, emailid: req['user']['foundUser'].emailid, fullname: req['user']['foundUser'].fullname, role: req['user']['foundUser'].role, project_code: req['user']['foundUser'].project_code });
        if (token)
            resS.send(res, "Login Successful !", { token });
        else
            resS.sendError(res, 501, 'Token fields are invalid !', {});
    }
    else
        resS.sendError(res, req['user']['status'], req['user']['message'], req['user']['err'] || {});
}));
Router.route('/auth/register')
    .post((req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const existingUser = yield User.findOne({ emailid: req.body.emailid.toLowerCase() }, { _id: 0, emailid: 1 });
    if (existingUser)
        resS.sendError(res, 409, "User Already Exists !", {});
    else {
        req.body.doj ? req.body.doj = dateFormat.custom(req.body.doj) : null;
        // const Schema = require('mongoose').Schema;
        const userD = new User(req.body);
        // userD._id = new Schema.Types.ObjectId;
        req['user']['foundUser'] = yield userD.save();
        const token = Verify.getToken({ _id: req['user']['foundUser']._id, emailid: req['user']['foundUser'].emailid, fullname: req['user']['foundUser'].fullname, role: req['user']['foundUser'].role, project_code: req['user']['foundUser'].project_code });
        if (token)
            resS.send(res, "Registration Successful !", { token });
        else
            resS.sendError(res, 501, 'Registration Successful, but token fields are invalid !', {});
    }
}));
module.exports = Router;
