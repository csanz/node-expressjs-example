var _app
  , event = {};

module.exports = function(app) {
  _app = app
  return event
}

// Events

event.create_blog_post = function (data) {

  console.log("Sending create pusher trigger...".input)

  _app.settings.pusher.trigger(process.env.PUSHER_CHANNEL, 'post', data)

}

event.update_blog_post = function (data, req) {

  console.log("Sending update pusher trigger...".input)

  _app.settings.pusher.trigger(process.env.PUSHER_CHANNEL,'post', data)
}

event.delete_blog_post = function (data, req) {

  console.log("Sending delete pusher trigger...".input)

  _app.settings.pusher.trigger(process.env.PUSHER_CHANNEL,'post', data)
}