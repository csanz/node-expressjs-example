
var Schema   = require('mongoose').Schema
  , ObjectId = Schema.ObjectId;

/**
 * Schema
 */

// Note the `{ collection: 'admin' }` option
// See for reference the links below:
// http://stackoverflow.com/a/10559895/699490
// http://mongoosejs.com/docs/guide.html#collection
var Admin = module.exports = new Schema({
    doc_name            : { type: String,   required : true,   unique : true }
  , host                : { type: String,   required : true }
  , port                : { type: Number,   required : true }
  , default_sa_active   : { type: Boolean,  required : true }
  , default_sa_username : { type: String,   required : true }
  , default_sa_password : { type: String,   required : true }
  , theme               : { type: String,   required : true }
  }
  , { collection        : 'admin' }
);

/**
 * @param     {String}   key
 * @param     {Callback} callback
 *
 * @api       public
 *
 * @summary   Obtains All Values
 */
Admin.statics.getAllValues = function (callback) {
  this.findOne({ 'doc_name' : 'admin_keys' }, gotObj)
  function gotObj (err, obj) {
    if (err) return callback(err)
    if (!obj) return callback({ 'message' : 'Document admin not found!'})
    return callback(null, obj)
  }
}

/**
 * @param   {String}   key
 * @param   {Callback} callback
 *
 * @api     public
 *
 * @summary Obtains Value
 */
Admin.statics.getValueByKey = function (key, callback) {
  this.findOne({ 'doc_name' : 'admin_keys' }, gotObj)
  function gotObj (err, obj) {
    if (err) return callback(err)
    if (!obj) return callback({ 'message' : 'Document admin not found!'})
    return callback(null, obj[key])
  }
}

/**
 * Update Key
 *
 * @param     {String}   key
 * @param     {String}   value
 * @param     {Callback} callback
 *
 * @api       public
 *
 * @summary   Updates key
 */
Admin.statics.updateKey = function (key, value, callback) {
  var update     = {}
  update['$set'] = {}
  update['$set'][key] = value
  return this.update( {'doc_name' : 'admin_keys'}
                    , update
                    , { multi: false }
                    , callback);
}
