// ajax

$(function(){

  // Instatiate pusher
  
  var pusher = new Pusher(PUSHER["app_key"],{
      cluster : PUSHER["cluster"]
  });

  var channel = pusher.subscribe(PUSHER["channel"]);

  channel.bind(PUSHER["event"], function(data) {
    response(data);
  });

  reset_messaging();

  // Create post
  
  $('#create').submit(function(){
    var data = $(this).serialize();
    $.post('/create', data, function(res){
      // Check http / server errors 

      if(res.error){
        // do something

      }else{

        $('#alert').hide()

        // Check validation errors

        if(res.validation_errors){
          $('#alert').fadeIn()

          // found errors with fields

          $('#create *').find('input, textarea').each(function(){
            
            $(this).css('border-color', '#cccccc');

            if(res.validation_errors[this.name]){
              $(this).css('border-color', '#c9474a');
            }

          });


        }else{

          // all good
          $('#create *').find('input, textarea').each(function(){

              $(this).css('border-color', '#cccccc');

          });

        }

      }
    });
    return false;
  });

  // Delete post

  $('#posts')
    .delegate('a', 'click', function() {

      console.log("delegating click action");

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

///////////////////////
// utility functions

function notify(type, msg, duration) {
  if (!msg) msg = type, type = 'info';
  duration = duration || 2000;
  var el = $('<li class="' + type + '">' + msg + '</li>');
  $('#flash').append(el);
  setTimeout(function(){ remove(el); }, duration);
}

// handle pusher post

function response(res) {

  if (res.error) {
    notify('error', res.error);
  } else {

    if (res.message) {
      notify(res.message); 
    }

    if (res.prepend) {
      $(res.to).prepend(res.prepend).hide().fadeIn();
      reset_messaging();
    }
    if (res.append) {
      $(res.to).append(res.append);
      reset_messaging();
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
        reset_messaging();

      });
    }
  }
}

// Reset Messaging 

function reset_messaging(){
 if(!$('#posts').find(".well").length) $("#noposts").show();
 if($('#posts').find(".well").length) $("#noposts").hide();
}