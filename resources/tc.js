var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
module.exports = {
  get: function(id) {
    var me = this;
    if (!id) {
      this.collection.find(me.params).toArray(function(err, docs) {
        me.res.send(docs);
      });
      return;
    }

    this.collection.find({_id: new ObjectID(id)}).toArray(function(err, docs) {
      me.res.send(docs);
    });
  },
  post: function() {
    var me = this;
    this.collection.insertOne(me.req.body, function (err, r) {
      assert.equal(null, err);
      me.res.send({
        result: 0,
        data: me.req.body
      });
    });
  },
  delete: function(id) {
    
  },
  put: function(id) {
    
  }
};