// Events

exports.create_blog_post = function (data, req) {
  var pusher = req.app.set('pusher')
  pusher.blog_post.trigger('post', data)
}

exports.update_blog_post = function (data, req) {
  var pusher = req.app.set('pusher')
  pusher.blog_post.trigger('post', data)
}

exports.delete_blog_post = function (data, req) {
  var pusher = req.app.set('pusher')
  pusher.blog_post.trigger('post', data)
}