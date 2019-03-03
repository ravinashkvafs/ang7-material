import { Request, Response, NextFunction } from 'express';

const Router = require('express-promise-router')();
const passport = require('passport');
const _ = require('lodash');

const User = require('../models/users');
const resS = require('../utility/sendFormat');
const Verify = require('./verify');
const dateFormat = require('../utility/date_format');

const passportLocal = passport.authenticate('local', { session: false });
const passportJwt = passport.authenticate('jwt', { session: false });

Router.route('/test')
    .get(async (req: Request, res: Response, next: NextFunction) => {
        let test = new User();
        test = await test.save();

        resS.send(res, "Data !", test);
    });

Router.route('/')
    .get(passportJwt, Verify.verifyAdmin, Verify.verifyClient, Verify.verifyIsp, async (req: Request, res: Response, next: NextFunction) => {
        resS.send(res, "Data !", req['user']);
    });

Router.route('/resetPassword')
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const foundUser = await User.findById(req['user']['_id'], { password: 1 });
        foundUser.password = req['user']['loginid'] + '@123';
        const savedUser = await foundUser.save();
        resS.send(res, "Password Resetted Successfully !", savedUser);
    });

Router.route('/changePassword')
    .put(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const foundUser = await User.findById(req['user']['_id'], { password: 1 });
        foundUser.password = req.body.newPassword;
        const savedUser = await foundUser.save();
        resS.send(res, "Password Changed Successfully !", savedUser);
    });

Router.route('/auth/login')
    .post(passportLocal, async (req: Request, res: Response, next: NextFunction) => {
        if (req['user']['success']) {
            delete req['user']['success'];

            const token = Verify.getToken(req['user']);

            resS.send(res, "Login Successful !", { token });
        }
        else
            resS.sendError(res, req['user']['status'], req['user']['message'], req['user']['err'] || {});
    });

Router.route('/auth/register')
    .post(async (req: Request, res: Response, next: NextFunction) => {
        const existingUser = await User.findOne({ loginid: req.body.loginid.toLowerCase() }, { _id: 0, loginid: 1 });

        if (existingUser)
            resS.sendError(res, 409, "User Already Exists !", {});
        else {
            req.body.doj ? req.body.doj = dateFormat.custom(req.body.doj) : null;

            // const Schema = require('mongoose').Schema;
            const userD = new User(req.body);
            // userD._id = new Schema.Types.ObjectId;

            const savedUser = await userD.save();

            const token = Verify.getToken({ _id: savedUser._id, loginid: savedUser.loginid, ifor: savedUser.fullname, role: savedUser.role, project_code: savedUser.project_code });

            resS.send(res, "Registration Successful !", { token });
        }
    });

module.exports = Router;