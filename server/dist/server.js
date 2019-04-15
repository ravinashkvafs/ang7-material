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
const express = require('express');
const mongoose = require('mongoose');
// const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const sanitize = require('express-mongo-sanitize');
const passport = require('passport');
const path = require('path');
require('dotenv').load();
require('./utility/passport');
const app = express();
// app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(sanitize());
app.use(passport.initialize());
app.use('/', express.static(path.join(__dirname, '/public')));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
(() => __awaiter(this, void 0, void 0, function* () {
    yield mongoose.connect(process.env.MONGO_URL, (err) => {
        if (!err)
            console.log("Connected to db !");
    });
    const port = process.env.PORT || '3000';
    yield app.listen(port, (err) => {
        if (!err)
            console.log(`Server listening on port ${port}`);
    });
}))();
const resS = require('./utility/sendFormat');
const users = require('./routes/users');
const attendance = require('./routes/attendance');
app.use('/user', users);
app.use('/attendance', attendance);
app.use((req, res) => {
    resS.sendError(res, 404, "No Matching Route Found !");
});
app.use((err, req, res) => {
    resS.sendError(res, 501, "Error Occured !", err);
});
