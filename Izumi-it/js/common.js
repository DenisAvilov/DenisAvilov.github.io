$(document).ready(function(){
    $('.top-slider').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav:false,
        dots:false,
        itemClass : "top-wrap",
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
    });
    //second slider
    $('.slider-second').owlCarousel({
        loop:true,
        navText: ["<div><i class='fas fa-chevron-left'></i></div>"," <div><i class='fas fa-chevron-right'></i></div>"],
        nav:false,
        dots:false,
        itemClass : "second-wrap",
        autoplay: false,
        autoplayTimeout: 3000,
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
    });
     //popup



     if(matchMedia){
         let screen = window.matchMedia("(max-width: 48em)");
         screen.addListener(changes);
         changes(screen);
     }
     function changes(screen) {
         screen.matches ? maxWidth() : minWidth();
     }

    function maxWidth() {
        console.log("<48em");
        $('.home').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop:0
                }, 1100);
            }
            return false;
        });
        $('.about').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop:210
                }, 1100);
            }
            return false;
        });
        $('.service').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 670
                }, 1000);
            }

            return false;
        });
        $('.portfolio').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 1200
                }, 1000);
            }

            return false;
        });
        $('.contact').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 2000
                }, 1000);
            }

            return false;
        });
    }
    function minWidth() {
        console.log(">48em");
        $('.home').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop:0
                }, 1100);
            }
            return false;
        });
        $('.about').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop:330
                }, 1100);
            }
            return false;
        });
        $('.service').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 400
                }, 1000);
            }

            return false;
        });
        $('.portfolio').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 965
                }, 1000);
            }

            return false;
        });
        $('.contact').on('click',function (ls) {
            if(ls !== null){
                $('html, body').animate({
                    scrollTop: 1450
                }, 1000);
            }

            return false;
        });


    }



    $(window).scroll(()=> {
        let height = $(window).scrollTop();
        if(height > 100){$('.top-link').css('backgroundColor', '#001a33');}
          else{  $('.top-link').css('backgroundColor','');}




    });


});

