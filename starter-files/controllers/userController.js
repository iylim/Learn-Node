const mongoose = require('mongoose');

exports.loginForm = (req, res) => {
  res.render('login', { title: 'Login Form' });
};

exports.registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
};
