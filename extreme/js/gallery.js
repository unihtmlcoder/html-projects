jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.lightboxTrigger').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    
    // determine the index of clicked trigger
    var slideNum = $('.lightboxTrigger').index(this);
    
    // find out if #lightbox exists
    if ($('#lightbox').length > 0) {        
      // #lightbox exists
      $('#lightbox').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="lightbox">' +
          '<p><i class="fa fa-times" aria-hidden="true"></i></p>' +
          '<div id="slideshow">' +
          '<ul></ul>' +        
          '<div class="nav">' +
          '<a href="#prev" class="prev slide-nav">prev</a>' +
          '<a href="#next" class="next slide-nav">next</a>' +
          '</div>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      
      // fill lightbox with .lightboxTrigger hrefs in #imageSet
      $('#imageSet').find('.lightboxTrigger').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow ul').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshow ul > li').length;
    
    // hide all slide, then show the selected slide
    $('#slideshow ul > li').hide();
    $('#slideshow ul > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#lightbox', function() { // using .on() instead of .live(). more modern, and fixes event bubbling issues
    $('#lightbox').fadeOut(300);
  });
  
  // show/hide navigation when hovering over #slideshow
  $('body').on(
    { mouseenter: function() {
      $('.nav').fadeIn(300);
    }, mouseleave: function() {
      $('.nav').fadeOut(300);
    }
    },'#slideshow');
  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
      // in absence of .prev, assume .next
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshow ul > li:eq(' + dest + ')').fadeIn(750);
    
    // update current slide
    current = dest;
  });
  
});