
// Module constants
var Schema   = require('mongoose').Schema
  , ObjectId = Schema.ObjectId;

/**
 * Schema
 */

var BlogPost = module.exports = new Schema({
    title         : { type: String,     required  : true }
  , body          : { type: String,     required  : true }
  , author        : ObjectId
  , tags          : [String]
  , categories    : [String]
  , is_active     : { type: Boolean,    default   : true }
  , date_created  : { type: Date,       default   : Date.now }
  , date_updated  : { type: Date }
});

/**
 * Get Latest Posts
 *
 * @param {Callback} callback
 *
 * @api public
 */
BlogPost.statics.getLatestPosts = function (callback) {
  return this.find().sort('_id','descending').limit(15).find({}, callback);
};
