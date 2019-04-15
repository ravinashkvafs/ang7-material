'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorLog = require('../models/error_log');
// const path = require('path');
module.exports = {
    send: (res, message, data) => {
        return res.status(200).json({ success: true, message, data: data || {} });
    },
    download: (res, filePath, fileName) => {
        return res.status(200).download(filePath, fileName);
    },
    sendError: (res, status, message, error) => {
        let now = new Date();
        const sendObj = { success: false, message, error: error || {}, date: new Date(now.getTime() + (330 * 60 * 1000)) };
        ErrorLog.create(sendObj);
        return res.status(status).json(sendObj);
    }
};
