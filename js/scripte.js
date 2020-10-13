$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if  ( scroll > 200) {
            $('.scroll-nav').slideDown();
            }
        else  { 
        $('.scroll-nav').slideUp();  
              }
   

   });           

    });
    // this is animate for clicking in li
$('.header li a').click(function(){
    $('html , body').animate({
   scrollTop : $('#' + $(this).data('value')).offset().top
},1500);

});
