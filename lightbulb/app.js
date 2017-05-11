$(function(){
  $('.js-lightbulb').click(()=>{
    $('div.bulb-on').toggleClass('bulb-on');
    $(event.currentTarget).toggleClass('bulb-on');
  })
})
