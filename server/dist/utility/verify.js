'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
const resS = require('../utility/sendFormat');
const jwt = require('jsonwebtoken');
const keys_to_check = ['_id', 'emailid', 'fullname', 'role', 'project_code'];
exports.getToken = (userD) => {
    if (_.difference(keys_to_check, Object.keys(userD)).length > 0)
        return null;
    userD.iat = new Date().getTime();
    return jwt.sign(JSON.stringify(userD), process.env.TOKEN_CODE);
};
exports.verifyAdmin = (req, res, next) => {
    if (('user' in req) && ('role' in req['user']) && req['user']['role']['admin'])
        next();
    else
        return resS.sendError(res, 401, "You Are Not Authorized !");
};
module.exports = exports;
