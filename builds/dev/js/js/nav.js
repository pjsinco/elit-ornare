$(document).ready(function() {

  console.log('nav');

  $('body').addClass('js');
  var $menu = $('#site-nav'), 
    $menulink = $('.menu-toggle');

  $menulink.click(function(evt) { 
    $menulink.toggleClass('active'); 
    $menu.toggleClass('active') ;
    //return false;
    evt.preventDefault();
  });

  //$menulink.click(function(evt) {
    //$menulink.toggleClass('active');
    //$menu.toggleClass('active');
    //evt.preventDefault();
  //});
});
