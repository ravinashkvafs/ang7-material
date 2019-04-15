'use strict';

import { Request, Response, NextFunction } from 'express';

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
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {

        resS.send(res, "Password Resetted Successfully !", req['user']);
    });

Router.route('/basicInfo')
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const foundUser = await User.findById(req['user']['_id'], { _id: 0, fullname: 1, designation: 1, gender: 1 });

        resS.send(res, "User Found Successfully !", foundUser);
    });

Router.route('/resetPassword')
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const foundUser = await User.findById(req['user']['_id'], { password: 1 });
        foundUser.password = req['user']['emailid'] + '@123';
        req['user']['foundUser'] = await foundUser.save();
        resS.send(res, "Password Resetted Successfully !", req['user']['foundUser']);
    });

Router.route('/changePassword')
    .put(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const foundUser = await User.findById(req['user']['_id'], { password: 1 });
        foundUser.password = req.body.newPassword;
        req['user']['foundUser'] = await foundUser.save();
        resS.send(res, "Password Changed Successfully !", req['user']['foundUser']);
    });

Router.route('/auth/login')
    .post(passportLocal, async (req: Request, res: Response, next: NextFunction) => {
        if (req['user']['success']) {
            delete req['user']['success'];

            const token = Verify.getToken({ _id: req['user']['foundUser']._id, emailid: req['user']['foundUser'].emailid, fullname: req['user']['foundUser'].fullname, role: req['user']['foundUser'].role, project_code: req['user']['foundUser'].project_code });

            if (token) resS.send(res, "Login Successful !", { token });
            else resS.sendError(res, 501, 'Token fields are invalid !', {});
        }
        else
            resS.sendError(res, req['user']['status'], req['user']['message'], req['user']['err'] || {});
    });

Router.route('/auth/register')
    .post(async (req: Request, res: Response, next: NextFunction) => {
        const existingUser = await User.findOne({ emailid: req.body.emailid.toLowerCase() }, { _id: 0, emailid: 1 });

        if (existingUser)
            resS.sendError(res, 409, "User Already Exists !", {});
        else {
            req.body.doj ? req.body.doj = dateFormat.custom(req.body.doj) : null;

            // const Schema = require('mongoose').Schema;
            const userD = new User(req.body);
            // userD._id = new Schema.Types.ObjectId;

            req['user']['foundUser'] = await userD.save();

            const token = Verify.getToken({ _id: req['user']['foundUser']._id, emailid: req['user']['foundUser'].emailid, fullname: req['user']['foundUser'].fullname, role: req['user']['foundUser'].role, project_code: req['user']['foundUser'].project_code });

            if (token) resS.send(res, "Registration Successful !", { token });
            else resS.sendError(res, 501, 'Registration Successful, but token fields are invalid !', {});
        }
    });

module.exports = Router;