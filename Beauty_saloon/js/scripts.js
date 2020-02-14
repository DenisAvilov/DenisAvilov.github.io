$(document).ready(function () {



	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/Logo1.png" alt="Салон красоты">'
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
	})
});
$(document).ready(function () {
	$(".reviews").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: false,
		autoplay:true,
		autoplaySpeed: 300,
		responsiveClass: true,
		autoHeight: true,
		responsive: {}
	});
	$(".skills").owlCarousel({
		loop: false,
		items: 3,
		dots: true,
		nav: false,
		margin: 10,
		autoplay:true,
		autoplaySpeed: 300,
		responsiveClass: true,

		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out' // CSS transition easing function
		}

	});


});
// $(document).ready(function(){
//     $(".partner").owlCarousel({
//         loop:true,
//         items:4,
//         dots:false,
//         nav:true,
//         responsiveClass:true,
//         navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//         autoHeight:true,
//         responsive:{
//
//         }
//     });
//
// });
$(document).ready(function () {
	$('.carousel-services').on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		autoplay:false,
		loop: true,
		nav: true,
		autolpaySpeed: 700,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 4
			},
			1600: {
				items: 4
			}

		}
		// animateOut: 'fadeOut'
	});
	/*выравниваем высоту контента с помощью плагина*/
	$('.carousel-services-content').equalHeights();
	function carouselService() {
		$('.carousel-services-item').each(function () {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-img').css('min-height', thsh);
		});
	}
	carouselService();
	/*Регуляпное выражения на ослеживания в загаловках класса второе слово и заварачивать его в спан*/

	// $('.carousel-services-composition .h3').each(function () {
	//     var world = $(this);
	//     world.html(world.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
	// });

	// $('#page-eyebrows .carousel-services-composition .h3').each(function () {
	//     var world = $(this);
	//     world.html(world.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
	// });

	$('#page-eyelashes .carousel-services-composition .h3').each(function () {
		var world = $(this);
		world.html(world.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	/*Регуляпное выражения на ослеживания в загаловках класса первое слово и заварачивать его в спан*/
	$('section .h2').each(function () {
		var world = $(this);
		world.html(world.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	/*Resize Вычисления высоты контента при изменении размера экрана*/
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}
	onResize();
	window.onresize = function () {
		onResize()
	};
	function onLable() {
		$('.carousel-services-composition .h3').equalHeights();
	}
	onLable();
	window.onLable = function () {
		onLable();
	};
	$('.open-popup-link').magnificPopup({
		type: 'inline',

		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
});

$(function () {
	$('select').selectize();
});
$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
		$('.widget-message').addClass('active')
	} else {
		$('.top').removeClass('active');
		$('.widget-message').removeClass('active')
	}
});
$(".top").click(function () {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')
});
$(document).ready(function () {

	//form value

	$("#form-valid").validate({
		rules:{
			Name:{
				required: true
			},
			Email:{
				required: true,
				email: true
			},
			tel:{
				required: true,
				digits: true,
				number: true,
				minlength: 10
			}
		},
		massage:{
			minlength: "Введите номер не меньше 10 символов"
		},
		focusCleanup: true,
		submitHandler: function(form) {
			var th = $(form);
				$.ajax({
					type: "POST",
					url: ("../mail.php"), //Change
					data: th.serialize()
				}).done(function ()
				{
					$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
					setTimeout(function () {
						$(th).find('.success').removeClass('active').fadeOut();
						// Done Functions
						th.trigger("reset");
					}, 5000);
				});
	  }
	});



	// var forms = document.getElementById('stop-lead');
	// for(var  i = 0; i < forms[1].length; i++){
	// 	forms[i].addEventListener('submit', validator);
	// }
	// function validator(){
	// 	e.preventDefault();
	// 	alert('fg')
	// }
	//
	//
	//
	//
    // $("#stop-lead").validate({
	// 	rules:{
	// 		name: {
	// 			required: true
	// 		},
	// 		email:{
	// 			required:true,
	// 			email: true
	// 		},
	// 		focusCleanup: true
	// 	}
	//
	// });


                                  // var forms = document.getElementsByTagName('form');
                                  // for(var i = 0; i < forms.length; i++ ){
                                  // 	forms[i].addEventListener('submit', validator);
                                  // }
								  //
                                  // var rules = {
                                  // 	required: function(el){
                                  // 	  	if(el.value != ' '){
                                  // 	  		return true;
                                  // 	  	}
                                  // 	  	return false;
                                  // 	}
                                  // 	// email: function(el) {
                                  // 	// 	var reg = /^\W{1,}@\w{1,}\w{1,}$/;
                                  // 	//      return  reg.test(el.value);
                                  // 	// },
									//   // tel: function (el) {
									// 	//   // var telReg =/^\1$/;
									//   // }
                                  // };
								  //
                                  // function showErrors(arr){
                                  // 	console.log(arr);
                                  // }
								  //
                                  // function validator(e) {
                                  // 	//Создаем масив в который сохраняем ошибки
                                  // 	var errors = [];
                                  // 	var inputs = this.elements;
                                  //    for(var i = 0; i < inputs.length; i++) {
									// 	 if (inputs[i].tagName != 'BUTTON') {
									// 	 var rulesList = inputs[i].dataset.rule;
									// 	      console.log(rulesList);
									// 	 rulesList = rulesList.split(' ');
									// 		 console.log(rulesList,'after split');
									// 	 if(rulesList in rules) {
									// 		 for (var j = 0; j < rulesList.length; j++) {
									// 			 console.log(rulesList[j],inputs[i],'before error');
									// 			 if(!rules[rulesList[j](inputs[i])]) {
									// 				 errors.push({
									// 				 error: rulesList[j],
									// 				 name: inputs[i].name
									// 				 });
									// 			 }
									// 		 }
									// 	 }
								  //
									//  }
                                  //    }
									//   e.preventDefault();
									//   if(errors.length > 0){
									//  										                                     	e.preventDefault();
									//  										                                     	showErrors(errors);
									//  										                                     }
								  //
                                  // }

//---------------------------------------------------------------------
// 	E-mail Ajax Send
// 	$("form.callback").submit(function () { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: ("../mail.php"), //Change
// 			data: th.serialize()
// 		}).done(function ()
// 		{
// 			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
// 			setTimeout(function () {
// 				$(th).find('.success').removeClass('active').fadeOut();
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 3000);
// 		});
// 		return false;
// 	});

	// $(document).mouseleave(function(e){
	//     if (e.clientY < 10) {
	//         $(".exitblock").fadeIn("fast");
	//     }
	// });
	// $(document).click(function(e) {
	//     if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
	//         $(".exitblock").remove();
	//     }
	// });





// функция возвращает cookie с именем name, если есть, если нет, то undefined
// function getCookie(name) {
//     var matches = document.cookie.match(new RegExp(
//     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
// var alertwin = getCookie("alertwin");
// if (alertwin != "no") {
//     $(document).mouseleave(function(e){
//         if (e.clientY < 0) {
//             $(".exitblock").fadeIn("fast");
//             // записываем cookie на 1 день, с которой мы не показываем окно
//             var date = new Date;
//             date.setDate(date.getDate() + 1);
//             document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
//         }
//     });
//     $(document).click(function(e) {
//         if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
//             $(".exitblock").remove();
//         }
//     });
// }



	$("#btn_hidden_content").on('click', hiddenContent);

	var tert = document.getElementById("btn_hidden_content");

	function hiddenContent() {
		var myHidden = $(".myHidden");
		switch (tert.textContent) {
			case "Подробней":
				tert.innerHTML = "Скрыть";
				myHidden.show(800);
				break;
			case "Скрыть":
				tert.innerHTML = "Подробней";
				myHidden.hide(800);
				break;
		}
		// case (tert.textContent):

		// if(tert.textContent == "Подробней"){
		//     tert.innerHTML = "Скрыть"
		//        myHidden.show(800);
		//
		//   }else if (tert.textContent == "Скрыть"){
		//       tert.innerHTML = "Подробней"
		//     myHidden.hide(800);
		//   }

	}

	$(document).mouseup(function (e) {
		var container = $(".myHidden");

		// if (container.has(e.target).length === 0 && tert.textContent == "Скрыть"){
		//     tert.innerHTML = "Подробней"
		//     container.hide(800);
		// }
	});
	$(".main-carousel").owlCarousel();
});
$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});



