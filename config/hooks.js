
module.exports = function (app) {

  // Load events

  var events = require('../app/hooks/event')(app);

  console.log("Setting up hooks...".input);

  // Event hooks

  app.on('event:create_blog_post', events.create_blog_post);
  app.on('event:update_blog_post', events.delete_blog_post);
  app.on('event:delete_blog_post', events.delete_blog_post);

  return app;

}