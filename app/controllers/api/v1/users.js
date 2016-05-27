var models  = require('./../../../models');
/*
 * Get a users entire sipping history
 */
exports.getUser = function(req, res) {
    models.User.findAll().then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
}