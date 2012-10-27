
var Schema   = require('mongoose').Schema
  , ObjectId = Schema.ObjectId;

/**
 * Schema
 */
var User = module.exports = new Schema({
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
User.statics.getAuthorById = function (id, callback) {
  return this.findOne({ '_id' : id }, callback);
}
