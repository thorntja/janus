var async = require('async');
var https = require('https');
var Property = require('../models/property.js');

exports.find = function(params, callback){
  Property.find({}, 'address type', function(err, properties){
    if(err){
      callback(err, null); //(error, payload)  -- error means no payload so payload param is empty
      return;
    }

    callback(null, properties);
  })
};

exports.findById = function(id, callback){
  Property.findById(id, function(err, property){
    if(err){
      callback(err, null);
      return;
    }

    callback(null, property);
  })
}

exports.create = function(body, callback) {

  var newProperty = new Property({
    address: body.address
  });

  newProperty.save(function(err, property){
    if(err){
      callback(err, null); //(error, payload)  -- error means no payload so payload param is empty
      return;
    }

    callback(null, property);
  });
};

exports.delete = function(id, callback){
  Property.findByIdAndRemove(id, function(err) {
    if (err){
      callback(err, null); //(error, payload)  -- error means no payload so payload param is empty
      return;
    }

    callback(null);
  });
}
