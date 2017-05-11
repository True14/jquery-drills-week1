/* global $ */
$(function () {
  $('.thumbnail img').click(function (){
    $('.hero img').attr('src', $(event.currentTarget).attr('src'));
  });
});
