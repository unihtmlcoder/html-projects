


$(document).ready(function () {

	$('.innerpage .HighlightBtn').hide();

	$('.close').bind('click',function(){
		$('.loginPop').fadeOut();
	});
	$('.donateBtn').bind('click',function(){
		$('.donatePop').fadeToggle();
	});
	
	//dropdown
	$('.dropdownLi.students').bind('click',function(){
		$('.dropdowns#forms').slideUp();
		$('.dropdowns#students').slideToggle(500);
		
	});
	$('.dropdownLi.forms').bind('click',function(){
		$('.dropdowns#students').slideUp();
		$('.dropdowns#forms').slideToggle(500);
		
	});

	// $('.dropdownLi').bind('click',function(){
	// 	//
	// 	if($('.dropdownLi i').find('fa-angle-down')){
	// 		$('.dropdownLi i').addClass('fa-angle-up').removeClass('fa-angle-down');
	// 		$('.dropdowns').slideDown(500);
	// 		$('.dropdownLi').bind('click',function(){
	// 		if($('.dropdownLi i').find('fa-angle-up')){
	// 		$('.dropdownLi i').addClass('fa-angle-down').removeClass('fa-angle-up');
	// 		$('.dropdowns').slideUp(500);
	// 	}
	// });
	// 	}

	// });
	//login pop

	$('.Main_header .HighlightBtn').bind('click',function(){
		$('.loginPop').fadeToggle();
	});
	//animate the round
	$(window).load(function(){
		setTimeout(function(){
		  $('.bigRound').addClass("bigRound_rotate");
		}, 1000);
		var winWidthD = $(window).width();
		if(winWidthD > 1200) {
			setTimeout(function () {
				$('.navLeftInner').animate({'left': '0%'}, 2000);
				$('.navRightInner').animate({'left': '0%'}, 2000);
			}, 2000);
		}

		if(winWidthD < 1200){
			$('.navLeftInner').animate({'left':'-5%'},2000);
			$('.navRightInner').animate({'left':'10%'},2000);
		}


	//slider

	$("#slideshow > li:gt(0)").hide();

		setInterval(function() {			
		  $('#slideshow > li:first')
		    .fadeOut(2000)
		    .next()
		    .fadeIn(2000)
		    .end()
		    .appendTo('#slideshow');

		}, 3000);


		
	});
	

	//animate athe header
	

	var pContainerHeight = $('.banner_section').outerHeight(true);

	$('.texts').animate({'transform':'rotate(0deg)'},1000);
	$(window).load(function(){
	var wWidth = $(window).width();
	if(wWidth > 768){
		$('.menuLeft').hide();
		$('.menuRight').hide();
	}else{
		$('.menuLeft').show();
		$('.menuRight').show();
	}
	if(wWidth<=768){	
			$('.innerpage .HighlightBtn').show();
			$('.about_section').css({'overflow':'hidden'});
			$('.col3').css({'padding-right':'0'});
			$('.imageHolder h2').removeClass('initial_state');	
			$('.imageHolder h2').addClass('after_state');

			var resMenu1 = $('.navLeftInner').html();
			var resMenu2 = $('.navRightInner').html();
			var drop1students = $('.dropdowns#students').html();
			var drop1form = $('.dropdowns#forms').html();
			$('.menuLeft').html(resMenu1);
			$('.menuLeft ul li:last-child').append(drop1students);
			$('.menuRight').html(resMenu2);
			$('.menuRight ul li:first-child').append(drop1form);

			$('.loginPop .menuContent ul li').bind('click',function(){
				$(this).find('ul').slideToggle();
			})

		}
	});

	$(window).scroll(function () {
		var winW = $(this).width();
		var scrollPos = ($(window).scrollTop()/2);
		var tr = 100;
		var tr2 = tr - scrollPos;
		var tr3 = tr2+'%';
		console.log(tr3);
		if(tr2 < -0){
			$('.topHeader').slideUp(1000);		
			if(winW > 768){
				$('.Main_header .HighlightBtn').hide();
			}
			
		}else{
			$('.topHeader').slideDown(1000);
				if(winW > 768){
			//$('.Main_header .HighlightBtn').fadeIn();
		}
		}

		if(scrollPos > 400){
			//$('.Main_header').slideUp();
		}

		if(tr2 >= -0){
			//alert("dsdsf");
			//$('.navLeftInner').css({'transform':'translate('+ tr3 +')'});
			//$('.navRightInner').css({'transform':'translate(-'+ tr3 +')'});
		}
		
		//$('.main_menu h1').css({'opacity':finalOpacity});


		// for banner parallex

		var wScroll = $(window).scrollTop();
		//alert(wScroll+" or "+pContainerHeight/2)
		if( wScroll > (pContainerHeight/4)){
			$('.bigRound').addClass("bigRound_escape");
		}else{
			$('.bigRound').removeClass("bigRound_escape");
		}

	  if (wScroll <= pContainerHeight) {

	    $('.slider__item').css({
	      'transform' : 'translate(0px, '+ wScroll /9 +'%)'
	    });	   

	    $('.banner_section .layer_3 ').css({
	      'transform' : 'translateY('+wScroll/20+'%)'
	    });

		}

		//about section

		var about_pos = $('.about_section').offset().top;
		var about_hulf = $('.about_section').height();
		var banner_section = $('.banner_section').offset().bottom;
		var danceHeight = $('.adultDance').height();		
		var dance_pos = $('.adultDance').offset().top;
		var header_height = $('.Main_header').height();
		var gallery_height = $('.gallery').height();
		var post_ofset = $('.post ').offset().top;
		if( (wScroll+header_height) > (about_pos-header_height)){
			//alert("sdfsdfsd");
			$('.about_section .aboutBottomBlueSec').addClass('aboutAnimateafter');
			$('.about_section .aboutBottomBlueSec').removeClass('aboutAnimateinitial');
		}

		if((wScroll +(dance_pos/3)) > post_ofset){	
			//$('.post').animate({'background-position-y':'-50px'},2000);			
			$('.post-right .postHolder').addClass('afterPostHolder');
			$('.post-right .postHolder').removeClass('initialPostHolder');
		}

		if(wScroll/2 > danceHeight){
			//alert("dfdsf");
			$('.galleryright h2').addClass('galleryH2');
		}
		var windWidth = $(window).width();
		if(windWidth > 768){
			if((wScroll/1.7) > (about_hulf-header_height) ){			
				$('.row1 .imagePart').animate({'top':'-50px'},2000);
			}
			if((wScroll/2) > (about_hulf-header_height) ){			
				$('.row2 .imagePart').animate({'top':'-100px'},2000);
			}
		}
		// if(wScroll> about_pos){
		// 	$('.aboutBottomBlueSec').css({'left':'-'+wScroll/40+'%'});
		// }
		
		if(wScroll >= (about_pos - header_height)){
			$('.navLeftInner').addClass('forAboutHead');
			$('.navRightInner').addClass('forAboutHead');
		}else{
			$('.navRightInner').removeClass('forAboutHead');
			$('.navLeftInner').removeClass('forAboutHead');
		}
		if(windWidth>768){
				$('.imageHolder').css({
	      'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
	    });	

	    if((wScroll+(header_height*6)) > (about_pos - header_height)){
	    	$('.imageHolder h2').addClass('after_state');
	    	$('.imageHolder h2').removeClass('initial_state');	    	
	    }else{
	    	$('.imageHolder h2').removeClass('after_state');
	    	$('.imageHolder h2').addClass('initial_state');
	    }

		}else{
			$('.imageHolder h2').removeClass('initial_state');	
			$('.imageHolder h2').addClass('after_state');
		}

	   

	    	



		

	});

	var aa = $(window).width();
	if(aa<= 768){
		$('.innerpage .HighlightBtn').show();
	}


})

// news tab //

$(document).ready(function() {
  $('.tabs li').click(function(){
    if ($(this).hasClass('selected')===false) {
      $('.tabs li').removeClass('selected');
      $(this).addClass('selected');
    }
    var selectionId = $(this).attr('id');
    $('.content').fadeOut('fast', function(){
      $('div .page').css('display','none');
      $('.page#'+selectionId).css('display','block');
      $('.content').fadeIn('fast');
    });
  });
});