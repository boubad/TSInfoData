// server.ts
/// <reference path="./serverconfig.ts" />
/// <reference path="./dbmanager.ts" />
//
var DBManager = require('./dbmanager');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
//
var app = express();
var nPort = 52999;
// all environments
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(logger());
app.use(cors());
//
app.get('/favicon.ico', function(req, res, next) {
  res.send(null);
});
app.get('/', function(req, res, next) {
  res.send('Select a collection, e.g., /api/collection')
});
//
app.get('/api/:collectionName', function(req, res, next) {
  var bcount = false;
  var skip = 0;
  var limit = 0;
  var pp = {};
  for (var k in req.query) {
    var v = req.query[k];
    if (k == '$count') {
      bcount = true;
    }
    else if (k == '$limit') {
      limit = v;
    }
    else if (k == '$skip') {
      skip = v;
    }
    else {
      pp[k] = v;
    }
  }
  var collectionName = req.params.collectionName;
  if (bcount) {
    DBManager.get_count(collectionName, pp).then(function(results) {
      res.send({ count: results });
    }).catch(function(err) {
        next(err);
      });
  } else {
    DBManager.get_all(collectionName, pp, skip, limit).then(function(results) {
      res.send(results);
    }).catch(function(err) {
        next(err);
      });
  }
});
app.post('/api/:collectionName', function(req, res, next) {
  var collectionName = req.params.collectionName;
  //console.log(req.body);
  DBManager.insert_one(collectionName, req.body).then(function(results) {
    res.send(results);
  }).catch(function(err) {
      next(err);
    });
});
app.get('/api/:collectionName/:id', function(req, res, next) {
  var collectionName = req.params.collectionName;
  var id = req.params.id;
  DBManager.find_one(collectionName, id).then(function(results) {
    res.send(results);
  }).catch(function(err) {
      next(err);
    });
});
app.put('/api/:collectionName/:id', function(req, res, next) {
  var collectionName = req.params.collectionName;
  var id = req.params.id;
  var pp = req.body;
  DBManager.update_one(collectionName, id, pp).then(function(result) {
    res.send((result === 1) ? { msg: 'success' } : { msg: 'error' });
  }).catch(function(err) {
      next(err);
    });
});
app.delete('/api/:collectionName/:id', function(req, res, next) {
  var collectionName = req.params.collectionName;
  var id = req.params.id;
  DBManager.remove_one(collectionName, id).then(function(result) {
    res.send((result === 1) ? { msg: 'success' } : { msg: 'error' });
  }).catch(function(err) {
      next(err);
    });
});
http.createServer(app).listen(nPort, function() {
  console.log('Data server listening on port ' + nPort);
});
