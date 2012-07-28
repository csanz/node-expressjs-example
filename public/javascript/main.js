// ajax

$(function(){
  
  var pusher = new Pusher(PUSHER["app_key"]);
  var channel = pusher.subscribe(PUSHER["channel"]);

  channel.bind(PUSHER["events"], function(data) {
    response(data);
  });

  // create data
  
  $('#create').submit(function(){
    var data = $(this).serialize();
    $.post('/create', data, function(res){
      if(!res.error){
        // Do something!
      }
    });
    return false;
  });
  
  //delete data

  $('#posts')
    .delegate('a', 'click', function() {
      if($(this).hasClass('delete')){
        var data = { id : $(this).parent().attr('id') };
        $.post('/delete', data, function(res){
          if(!res.error){
            // Do something!
          }
        });
      }
      else if($(this).hasClass('edit')){
        console.log($(this).next('form'))
        $(this).next('form').toggleClass('edit-mode');
      }
      return false;
    })
    .delegate('form', 'submit', function(){
      $(this).toggleClass('edit-mode');
      var data = $(this).serialize();
      $.post('/update', data, function(res){
        if(!res.error){
          // Do something!
        }
      });
      return false;
    })
  ;

})

// utility functions

function notify(type, msg, duration) {
  if (!msg) msg = type, type = 'info';
  duration = duration || 2000;
  var el = $('<li class="' + type + '">' + msg + '</li>');
  $('#flash').append(el);
  setTimeout(function(){ remove(el); }, duration);
}

// add elements to page

function response(res) {
  if (res.error) {
    notify('error', res.error);
  } else {
    if (res.message) {
      notify(res.message); 
    }
    if (res.prepend) {
      $(res.to).prepend(res.prepend).hide().fadeIn();
    }
    if (res.append) {
      $(res.to).append(res.append);
    }
    if (res.update) {
      var post = $('#'+res.target);
      // need to change this part for something more optimized
      post.find('h3').text(res.update.title);
      post.find('input[type="text"]').attr('value', res.update.title);
      post.find('p').text(res.update.body);
      post.find('textarea').text(res.update.body);
    }
    if (res.remove) {
      $('#'+res.target).fadeOut(function(){
        $('#'+res.target).remove();
      });
    }
    if ($('#noposts')) {
      $('#noposts').remove();
    }
  }
}