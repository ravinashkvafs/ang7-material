'use strict';

import { Request, Response, NextFunction } from 'express';

const Router = require('express-promise-router')();
const passport = require('passport');
const _ = require('lodash');

const Attendance = require('../models/attendance');
const resS = require('../utility/sendFormat');
const Verify = require('../utility/verify');
const dateFormat = require('../utility/date_format');

const passportJwt = passport.authenticate('jwt', { session: false });

Router.route('/checkTodayStatus')
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const now = new Date(new Date().getTime() + (330 * 60 * 1000)).toISOString().split('.')[0].split('T');

        const result = await Attendance.findOne({ user: req['user']['_id'], date: now[0], attendance: 'P', check_out: { $exists: false } }, { _id: 1 });

        if (result) resS.send(res, "Fetched Attendance Successfully !", {});
        else resS.sendError(res, 403, "No Attendnace Found !", {});
    });

Router.route('/checkIn')
    .post(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const now = new Date(new Date().getTime() + (330 * 60 * 1000)).toISOString().split('.')[0].split('T');

        if (await Attendance.findOne({ user: req['user']['_id'], date: now[0] }, { _id: 1 }))
            return resS.sendError(res, 403, "Checked-In Already for Today !", {});

        const toInsert = {
            user: req['user']['_id'],
            date: now[0],
            attendance: req['body']['attendance'],
            check_in: {
                time: now[1],
                latitude: req['body']['latitude'],
                longitude: req['body']['longitude'],
                accuracy: req['body']['accuracy']
            },
        };
        const result = await Attendance.create(toInsert);

        resS.send(res, "Checked-In Successfully !", result);
    });

Router.route('/checkOut')
    .post(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const now = new Date(new Date().getTime() + (330 * 60 * 1000)).toISOString().split('.')[0].split('T');

        if (! await Attendance.findOne({ user: req['user']['_id'], date: now[0] }, { _id: 1 }))
            return resS.send(res, "No Check-In Found for Today !", {});

        const result = await Attendance.findOneAndUpdate({ user: req['user']['_id'], date: now[0] }, {
            $set: {
                check_out: {
                    time: now[1],
                    latitude: req['body']['latitude'],
                    longitude: req['body']['longitude'],
                    accuracy: req['body']['accuracy']
                }
            }
        });

        resS.send(res, "Checked-Out Successfully !", result);
    });

Router.route('/fetchMonthAttendance')
    .get(passportJwt, async (req: Request, res: Response, next: NextFunction) => {
        const now = new Date(new Date().getTime() + (330 * 60 * 1000));
        const month_start = new Date(now.getFullYear(), now.getMonth(), 1, 5, 30, 0, 0).toISOString().split('T')[0];
        const month_end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 5, 29, 59, 999).toISOString().split('T')[0];

        console.log(month_start, month_end)

        const result = await Attendance.aggregate([
            { $match: { user: req['user']['_id'], date: { $gte: month_start, $lte: month_end } } },
            { $project: { _id: 0, date: { $arrayElemAt: [{ $split: ['$date', '-'] }, -1] }, attendance: 1 } }
        ]);

        resS.send(res, "Fetched Attendance Successfully !", _.groupBy(result, 'date'));
    });

module.exports = Router;