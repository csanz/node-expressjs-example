
const Schema = require("mongoose").Schema;
const ObjectId = Schema.ObjectId;

//////////////////////////
// Schema for Post

var Post = (module.exports = new Schema({
    title         : { type: String, required: [true, 'Missing Title!'] }
  , body          : { type: String, required: [true, 'Missing Body!'] }
  , is_active     : { type: Boolean, default:true }
  , date_created  : { type: Date, default: Date.now }
  , date_updated  : { type: Date, default: Date.now } 
}));

/**
 * Get Latest Posts
 *
 * @param {Callback} callback
 *
 * @api public
 */
Post.statics.getLatestPosts = function(callback){
  return this.find().sort([['date_created', -1]]).limit(15).find({}, callback)
}

// More info https://mongoosejs.com/docs/middleware.html

// Save

Post.pre('save', function(next){
  console.log('Saving...');
  next();
});

// Remove

Post.pre('remove', function(next){
  console.log('removing...');
  next();
});

// Init

Post.pre('init', function(doc){
  console.log('initializing...', doc);
});
