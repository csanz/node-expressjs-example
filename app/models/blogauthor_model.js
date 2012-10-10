
// Module constants
var Schema   = require('mongoose').Schema
  , ObjectId = Schema.ObjectId;

/**
 * Schema
 */

var BlogAuthor = module.exports = new Schema({
    username      : { type: String,     unique    : true }
  , fullname      : { type: String,     required  : true }
  , is_active     : { type: Boolean,    default   : true }
  , date_created  : { type: Date,       default   : Date.now }
});

/**
 * Get Author Data By ID
 *
 * @param {ObjectId} id
 * @param {Callback} callback
 *
 * @api public
 */
BlogAuthor.statics.getAuthorById = function (id, callback) {
  return this.findOne({ '_id' : id }, callback);
};

/**
 * Get Author Data By username
 *
 * @param {String}   username
 * @param {Callback} callback
 *
 * @api public
 */
BlogAuthor.statics.getAuthorByUsername = function (username, callback) {
  return this.findOne({ 'username' :username }, callback);
};

/**
 * Get Authors in DB
 *
 * @param {Callback} callback
 *
 * @api public
 */
BlogAuthor.statics.getAuthorList = function (callback) {
  return this.find({}, callback);
};
