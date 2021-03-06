'use strict';

var users = require('./controllers/users');
var index = require('./controllers');
var api = require('./controllers/api');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.post('/api/register', users.register);
  app.post('/api/login', users.login);
  app.get('/api/logout', users.logout);
  app.post('/api/changePassword', users.changePassword);
  app.post('/api/changeEmail', users.changeEmail);
  app.post('/api/addFriend', users.addFriend);
  app.get('/api/searchFriends', users.searchFriends);
  app.post('/api/deleteFriend', users.deleteFriend);
  app.post('/api/editAvatar', users.editAvatar);
  app.post('/api/linkAccounts', users.linkAccounts);
  app.get('/api/getProfile', users.getProfile);
  app.post('/api/receiveSignal', users.receiveSignal);

  app.get('/api/getCloseUsers', api.getCloseUsers);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.status(404).render('404.html');
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};