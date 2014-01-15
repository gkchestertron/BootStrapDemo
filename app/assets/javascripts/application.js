// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//

//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(function() {

  $('body').scrollspy({ target: '.navbar-example' })

  $('#tool-tip-1').on('mouseenter', function () {
      $('#tool-tip-1').tooltip();
  })
  var $contactButton = $('#contact-submit'),
  emailAlert = '<div id="email-alert" class="alert alert-danger alert-dismissable"> <span>Email cannot be blank</span>' +
          '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        '</div>',
  messageAlert = '<div id="message-alert" class="alert alert-danger alert-dismissable"> <span>Msg cannot be blank</span>' +
          '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        '</div>';

  $contactButton.on('click', function() {
    var error = false;
    $('#email').parent().removeClass('has-error');
    $('#message').parent().removeClass('has-error');
    $('#message-alert').remove();
    $('#email-alert').remove();

    if ($('#email').val() === "") {
      $('#email').parent().addClass('has-error');
      $('#email').parent().after(emailAlert);
      error = true;
    }
    if ($('#message').val() === "") {
      $('#message').parent().addClass('has-error');
       $('#message').parent().after(messageAlert);
      error = true;
    }

    if (!error) {
      $('#modal1').modal();
    }
  });
})