'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utility/date_format');
const UselessSchema = new Schema({
    project_code: { type: String, required: true, lowercase: true, trim: true },
    type: { type: String, required: true, lowercase: true, trim: true },
    path: { type: String, required: true, trim: true },
    inserted_on: { type: Object, default: dateFormat.now() }
});
module.exports = mongoose.model('useless_files', UselessSchema);
