var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
module.exports = {
  get: function(id) {
    var me = this;
    if (!id) {
      this.collection.find({}).toArray(function(err, docs) {
        me.res.send(docs);
      });
      return;
    }

    this.collection.find({_id: new ObjectID(id)}).toArray(function(err, docs) {
      me.res.send(docs);
    });
  },
  post: function() {
    var me = this;console.log(me.req.params);
    this.collection.insertOne(me.req.body, function (err, r) {
      assert.equal(null, err);
      me.res.send(r);
    })
  },
  delete: function(id) {
    
  },
  put: function(id) {
    
  }
};