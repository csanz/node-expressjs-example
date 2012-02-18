/**
 * Load hooks
 */

var ev = require('../app/hooks/event')

/**
 * Exports
 */

// Namespacing is recommended.

module.exports = function (app) {

  // Event hooks

  app.on('event:create_blog_post', ev.create_blog_post);
  app.on('event:update_blog_post', ev.delete_blog_post);
  app.on('event:delete_blog_post', ev.delete_blog_post);

}