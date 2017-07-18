const express = require('express');
var controllers = require('../controllers');

const router = express.Router();


router.get('/search*', function(req, res, next) {
  var query = req.query.q;
  var resource = req.query.r;
  var Controller = controllers[resource];

  if(Controller == null){
    res.json({ error: 'Invalid Resource Request: '+resource })
    return
  }

  Controller.find(req.query, function(err, results){
    if(err)
      res.json({ error: err })
    else
      res.json({ results: results })
    return
  })
})


router.get('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var Controller = controllers[resource];

  if(Controller == null){
    res.json({ error: 'Invalid Resource Request: '+resource })
    return;
  }

  Controller.find(req.query, function(err, results){
    if(err)
      res.json({ error: err })
    else
      res.json({ results: results })
    return
  })
});


router.post('/:resource', function(req, res, next){
  var resource = req.params.resource;
  var Controller = controllers[resource];

  if(Controller == null){
    res.json({ error: 'Invalid Resource Request: '+resource })
    return
  }

  Controller.create(req.body, function(err, result){
    if(err)
      res.json({ error: err })
    else
      res.json({ confirmation: 'success' })
    return
  })
});


router.get('/:resource/:id', function(req, res, next){
  var id = req.params.id;
  var resource = req.params.resource;
  var Controller = controllers[resource];

  if(Controller == null){
    res.json({ error: 'Invalid Resource Request: '+resource })
    return;
  }

  Controller.findById(id, function(err, result){
    if(err)
      res.json({ error: err })
    else
      res.json({ result: result })
    return
  })
});


router.delete('/:resource/:id', function(req, res, next){
  var resource = req.params.resource;
  var id = req.params.id;
  var Controller = controllers[resource];

  if(Controller == null){
    res.json({ error: 'Invalid Resource Request: '+resource })
    return
  }

  Controller.delete(id, function(err, result){
    if(err)
      res.json({error: err})
    else
      res.json({confirmation: 'success'})
    return
  })
});

module.exports = router;
