$(document).ready(function(){
  $("#homeslider .owl-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    loop:true,
    margin:10,
    items:1
  });
  
  $(".search-form").hide();
  $("#search-icon").click(function(){
    $(".search-form").slideToggle();
  });
});