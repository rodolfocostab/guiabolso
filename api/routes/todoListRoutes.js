'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/deploy')
    .get(todoList.list_all_deploy)
    .post(todoList.create_a_deploy);

  app.route('/deploy/:deployId')
    .get(todoList.read_a_deploy)
    .delete(todoList.delete_a_deploy);
};
