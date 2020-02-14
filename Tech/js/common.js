
$(document).ready(function () {
    $('.slide-head').owlCarousel({
        loop:true,
        autoplay: false,
        nav:false,
        autoplayTimeout:3000,
        // itemClass:'slide-wrap',
        // navText:['<i class="fa fa-chevron-circle-left"></i>','<i class="fa fa-chevron-circle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    })
    $('.slider-content').owlCarousel({
        loop:true,
        autoplay: false,
        nav: true,
        dots: true,
        // autoplayTimeout:3000,
        // itemClass:'slide-wrap',
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            360:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }

    })
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

    });


  // window.onscroll = function () {
  //     var topline = document.querySelector['top-line'];
  //
  // };
    // > $(this).height()
    $(window).scroll(function () {
        if ($(this).scrollTop() ){
            // $('.top').addClass('active')
            $('.top-line').css('background-image','url(../img/Background.png)')
        } else {
            $('.top-line').css('background-image','none')
        }
    });

 var icon = $('.icon-menu');
    var menu = $('#links');
         $(icon).on('click' , function(e){
           // $(icon).css('display','none') ;
           e.preventDefault();
           menu.slideToggle();
       });


var zer =  prompt("Введите число больше ста", "")

for(i = zer; i <= 100; i++){
      // if (i<=100){
      //     alert(zer);
      // }

    }

})
