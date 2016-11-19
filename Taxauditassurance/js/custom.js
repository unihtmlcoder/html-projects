$(document).ready(function(){

   $('.members-area a').on('click', function(e){
       e.preventDefault();
       $('.popup_overlay').css({'transform':'scale(1,1)'});

  });
   $('.login_div .cross_bar .cross_area a').on('click', function(even){
     even.preventDefault();
     $('.popup_overlay').css({'transform':'scale(0,0'});
   })

   $('.hamburger a').on('click', function(ev){
     ev.preventDefault();
     $('.menu').animate({right:0}, 300);
   });

   $('.menu .cross a').on('click', function(cl){
       cl.preventDefault();
        //var menuBarWidth= $('.menu').width();
        //var menuBarWidthOuter = -(menuBarWidth+100px);
        $('.menu').animate({right:'-100%'}, 300);
   });
});	