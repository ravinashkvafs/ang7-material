'use strict';

import * as mongoose from 'mongoose';

const AttSchema = new mongoose.Schema({
    user: { type: String, ref: 'users', required: true },
    date: { type: String, required: true, trim: true },
    attendance: { type: String, required: true, trim: true },
    check_in: {
        time: { type: String, required: true, trim: true },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        accuracy: { type: Number, required: true }
    },
    check_out: {
        time: String,
        latitude: Number,
        longitude: Number,
        accuracy: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('attendance', AttSchema, 'attendance');