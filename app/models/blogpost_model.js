
// Module constants
var Schema   = require('mongoose').Schema
  , ObjectId = Schema.ObjectId;

/**
 * Schema
 */

var BlogPost = module.exports = new Schema({
    title         : { type: String,           required  : true }
  , body          : { type: String,           required  : true }
  , author        : { type: Schema.ObjectId,  ref       : 'BlogAuthor', index: true }
  , tags          : [String]
  , categories    : [String]
  , is_active     : { type: Boolean,          default   : true }
  , date_created  : { type: Date,             default   : Date.now }
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
  return this
          .find({ 'is_active' : true })
          .sort('_id','descending')
          .limit(15).exec(callback);
};

/**
 * Get Latest Posts By Author's Username
 *
 * @param {String}   username
 * @param {Callback} callback
 *
 * @api public
 */
BlogPost.statics.getLatestPostsByAuthorUsername = function (username, callback) {
  return this
          .find({ 'is_active' : true, 'author.username' : username })
          .sort('_id','descending')
          .limit(15).exec(callback);
};

/**
 * Get Latest Posts By Author's Username
 *
 * @param {String}   username
 * @param {Callback} callback
 *
 * @api public
 */
BlogPost.statics.getLatestPostsByCategory = function (category, callback) {
    return this
          .find({ 'is_active' : true, 'categories' : category })
          .sort('_id','descending')
          .limit(15).exec(callback);
};

/**
 * Get Latest Posts By Author's Username
 *
 * @param {String}   username
 * @param {Callback} callback
 *
 * @api public
 */
BlogPost.statics.getLatestPostsByTag = function (tag, callback) {
  return this
          .find({ 'is_active' : true, 'tags' : tag })
          .sort('_id','descending')
          .limit(15).exec(callback);
};
