$(document).ready(function() {

	function currentDate() {
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output = d.getFullYear() + '/' +
		    ((''+month).length<2 ? '0' : '') + month + '/' +
		    ((''+day).length<2 ? '0' : '') + day;
		// $('.date').append(output);
	}

	function addItem() {
		var item = $('input').val();
        $('div.tick, h3.item, p.date, div.delete').wrapAll('<div class="row"></div>');
        $('.item').append(item);
    	$('input').val('');
	}

	function checkError() {
		if $('input').val().length == 0 {
		alert('none');	
	}

	$('input').keyup(function () {
		var len = $(this).val().length;
		if (len > 0) {
			$('form').find('.enter').css('display', 'block'); 	// Show enter icon after 1 character enetred
		} else {
			$('form').find('.enter').css('display', 'none');  // Hide enter icon if no character entered
		}
	})

	$('input').keydown(function (enter) {
            if (enter.keyCode == 13) {
            	alert('enter pressed');
            	// checkError();
            	// addItem();
            	// currentDate();
	 		}
    });

	$('.row').mouseenter(function() {
		$(this).find('.delete').show('fast'); 	// Show Delete button on mouseenter
	})

	$('.row').mouseleave(function() {
		$('.delete').hide("fast"); 				// Hide delete button on mouseleave
	})

	$('.row').click(function () {
		$(this).toggleClass('done');			// Toggle .done class when row clicked
		$(this).find('.tick').css('display', 'block');
	});

	$('.done').click(function () {				// Try to remove tick after row clicked
		alert('done clicked');
		// $(this).find('tick');
	})

	$('.delete').click(function () {
		$('.row').empty();
	})

})


