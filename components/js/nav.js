$(document).ready(function() {

  console.log('nav');

  $('body').addClass('js');
  var $menu = $('#site-nav'),
    $menulink = $('.site-nav__link--toggle');

  $menulink.click(function(evt) {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    evt.preventDefault();
    
  });
});
