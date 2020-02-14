$(document).ready(function () {
   
    $('#my-menu').mmenu({
        extensions: ["theme-white", 'pagedim-black', "border-full"],
        navbar: {
            // title: '<img src="img/Logo_DAD.png" alt="DAD">',
            close: false
        },
        offCanvas: {
            position: 'right'
        }
    });
    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function () {
        $('.hamburger').addClass('is-active');

    });
    api.bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });
    //////Magnific
    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


    $('.first-slid').owlCarousel({
        center: true,
        stagePadding: 70,
        loop: true,
        margin: 20,
        merge: true,
        nav: false,
        dots: false,
        URLhashListener: true,
        autoplayHoverPause: false,
        startPosition: 'URLHash',
        items: 1,
        responsive: {
            300: {
                stagePadding: 8,
                items: 1
            },
            600: {
                stagePadding: 70,
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('.second-slid').owlCarousel({
        center: true,
        stagePadding: 30,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 1,
        itemClass: "b-wrap",
        autoplay: true,
        responsive: {
            300: {
                stagePadding: 8,
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 3,
                stagePadding: 100
            }
        }
    });
    $('.persons-slider').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        // rtl:true,
        nav: true,
        dots: false,
        items: 1,
        navClass: ['team-owl-prev', 'team-owl-next'],
        responsive: {
            300: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 4

            },
            1350: {
                items: 4

            }
        }
    });


    //
    $("#know-more, #close").click(function () {
        $(".header-form").toggleClass("open")
    });
    $(document).mouseup(function (e) {
        var container = $(".header-form");
        if (container.has(e.target).length === 0) {
            container.removeClass("open");
        }
    });
    $("#clickMe").click(function () {
        $(".test").toggleClass("color");
    });
    $(".test").click(function () {
        $(".test").toggleClass("color");
    });


});


// var div = document.getElementById("portfolio"),
//          h = document.createElement("h1"),
//          p  = document.createElement("p"),
//          a = document.createElement("span");
//
//          div.className = "p-wrap";
//         h.innerText = 'Start Up';
//         p.innerText = 'Вся структура сайта под единую\nзадачу - офрмление заказа. Мы показываем\nбольше изображения товаров, акцентируем ...';
//         a.creatClass = "btn";
//         a.innerText = "Узнать больше";
//         div.appendChild(h);
//         div.appendChild(p);
//         div.appendChild(a);
//
//
//        console.log(div);
//        console.log(portfolio);


// <section class="p-text-block">
// 						   <article class="p-active my_flex my_fcolumn">
// 									<h1>Start Up</h1>
// 								<p>Вся структура сайта под единую
// 								задачу - офрмление заказа. Мы показываем
// 								больше изображения товаров, акцентируем ...
// 						    	</p>
// 									<span class="btn" >Узнать больше</span>
// 						   </article>
// 					    </section>