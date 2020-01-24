'use strict';


var mongoose = require('mongoose'),
  Deploy = mongoose.model('Deploy');

exports.list_all_deploy = function(req, res) {
  Deploy.find({}, function(err, deploy) {
    if (err)
      res.send(err);
    res.json(deploy);
  });
};

exports.create_a_deploy = function(req, res) {
  var new_deploy = new Deploy(req.body);
  new_deploy.save(function(err, deploy) {
    if (err)
      res.send(err);
    res.json(deploy);
  });
};


exports.read_a_deploy = function(req, res) {
  Deploy.findById(req.params.deployId, function(err, deploy) {
    if (err)
      res.send(err);
    res.json(deploy);
  });
};

exports.delete_a_deploy = function(req, res) {


  Deploy.remove({
    _id: req.params.deployId
  }, function(err, deploy) {
    if (err)
      res.send(err);
    res.json({ message: 'Deploy removido com sucesso' });
  });
};
