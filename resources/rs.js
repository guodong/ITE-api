var ObjectID = require('mongodb').ObjectID;
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
    
  },
  delete: function(id) {
    
  },
  put: function(id) {
    
  }
};