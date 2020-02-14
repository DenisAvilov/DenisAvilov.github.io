

$(document).ready(function () {

    $('#beauty-widget').on('click' , openWidget);
    $('.beauty-message-button a').on('click', stopPrev);

    function openWidget() {
    	if($(".beauty-message-button").hasClass('widget-active')){
				$(".beauty-message-button").removeClass('widget-active');
					console.log('removeClass');
		}else{
			$(".beauty-message-button").addClass('widget-active');
			console.log('addClass');
		}

    }
    function stopPrev(e){
            e.stopPropagation();
    		console.log('prevent');
	}

	// $(document).mouseup(function (e) {
	//     var container = $(".beauty-message-button");
	//     if (container.has(e.target).length === 0){
	//         container.removeClass("widget-active");
	//     }
	// });

});

