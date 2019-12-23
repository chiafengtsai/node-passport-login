"use strict";
// const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
// const mongoose = require('mongoose');
// const flash = require('connect-flash');
// const session = require('express-session');
// const passport = require('passport');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// // Passport config
// require('./config/passport')(passport);
// // DB Config
// const db = require('./config/keys').MongoURI;
// // Connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));
// // EJS
// app.use(expressLayouts);
// app.set('view engine', 'ejs');
// // Bodyparser
// app.use(express.urlencoded({ extended: false }));
// // Express Session
// app.use(
//   session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
//   })
// );
// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());
// // Connect flash
// app.use(flash());
// // Global Vars
// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });
// // Routes
// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));
// const PORT = process.env.PORT || 5003;
// app.listen(PORT, console.log(`Server started on prot ${PORT}`));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var add = function (a, b) { return a + b; };
app.get('/', function (req, res, next) {
    console.log(add(5, 51));
    res.send('hello hahah');
});
app.listen(5000, function () { return console.log('Server is running.'); });
