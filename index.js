const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer")

mongoose.connect('mongodb+srv://savi:sham1311BHAVI@cluster0-46c53.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'seCReT',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

app.use(express.static('public'));
app.use(expressLayouts);
app.set("view engine", "ejs");




app.use('/', require('./routes/app.js'));


app.get('/home', (req, res) => {
  res.status(404);
  res.render("home");
});

app.get('*', (req, res) => {
  res.status(404).send('404');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
