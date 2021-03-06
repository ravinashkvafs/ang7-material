'use strict';

import { Request, Response } from 'express';

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

(async () => {
    await mongoose.connect(process.env.MONGO_URL, (err: any) => {
        if (!err) console.log("Connected to db !");
    });

    const port: any = process.env.PORT || '3000';

    await app.listen(port, (err: any) => {
        if (!err) console.log(`Server listening on port ${port}`);
    });
})();

const resS = require('./utility/sendFormat');
const users = require('./routes/users');
const attendance = require('./routes/attendance');

app.use('/user', users);
app.use('/attendance', attendance);

app.use((req: Request, res: Response) => {
    resS.sendError(res, 404, "No Matching Route Found !");
});

app.use((err: Error, req: Request, res: Response) => {
    resS.sendError(res, 501, "Error Occured !", err);
});