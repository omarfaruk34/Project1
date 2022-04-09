

$(document).ready(function(){
    $('#nav').onePageNav({
        // onepage active
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        easing: 'swing'
      
    });
    // slicknav js active
    $('#nav').slicknav();
    // image popup active
    $('.project-popup').magnificPopup({
        type: 'image',
         gallery:{
             enabled:true
         }
    });
    // video popup active
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
// counter up active
    $('.counter-increment').counterUp({
        delay: 10,
        time: 1000
    });
    // slick-slider active
    $('.testimonial').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  arrows: false,
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,

              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
            


       
      });
 
})

// sticky header active
$(window).on('scroll',function(){
    if($(this).scrollTop() > 50) {
        $('.header-area').addClass('sticky');
    }
    else{
        $('.header-area').removeClass('sticky');

    }
})

  
 
  