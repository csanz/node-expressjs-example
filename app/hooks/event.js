// Event

exports.create_blog_post = function (data, req) {
  var pusher = req.app.set('pusher')
  pusher.blog_post.trigger('post', data)
}