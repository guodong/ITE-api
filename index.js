var express = require('express');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = process.env.MONGO_URL;
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to mongo");
  startServer(db);
});

/* start http server */
function startServer(db) {
  var app = express();

  app.all('/*', function (req, res) {
    var path = req.path;
    if (path.length === 1) {
      res.send('resource not specified');
      return;
    }
    var tmp = path.replace(/^\/|\/$/g, "");
    var pathArr = tmp.split('/');
    var resource = require('./resources/' + pathArr[0]);
    var method = req.method.toLowerCase();
    var params = pathArr.slice(1);
    
    /* dependent injection */
    resource.db = db;
    resource.collection = db.collection(pathArr[0]);
    resource.res = res;
    resource.req = req;
    
    /* call restful method */
    eval('resource.'+ method +'.apply(resource, params)');
  });
  
  app.listen(process.env.PORT);
}