"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var app = express_1.default();
// Passport config
require('../config/passport')(passport);
// DB Config
var db = require('../config/keys').MongoURI;
// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(function () { return console.log('MongoDB Connected...'); })
    .catch(function (err) { return console.log(err); });
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
// Bodyparser
app.use(express_1.default.urlencoded({ extended: false }));
// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Connect flash
app.use(flash());
// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
// Routes
app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));
var PORT = process.env.PORT || 5003;
app.listen(PORT);
