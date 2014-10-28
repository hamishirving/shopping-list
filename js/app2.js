$(document).ready(function() {

	function checkError() {
		if ($('input').val().length === 0) {		// If input is empty - show error
			$('.error').show();
			return true;
			} else {
				$('.error').hide();					// Else - hide error
				return false;
				}
	}

	function addItem() {
		var item = $('input').val();
		$('.wrap ').append('<div class="row"><div class="tick"></div><h3 class="item"></h3><p class="date"></p><div class="delete"></div></div>');
		$('.row').show();
		$('.item').eq( -1 ).append(item);
		$('input').val('');
	}

	function currentDate() {
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var fullDate = 
			((''+day).length<2 ? '0' : '') + day + '-' +
			((''+month).length<2 ? '0' : '') + month + '-' +
			d.getFullYear();						// Get date in DD/MM/YYYY format
		$('.date').eq( -1 ).append(fullDate);		// Append to date class
	}

	function rowInteract() {
		
		$('.row').on('mouseenter',(function() {
			$(this).find('.delete').show('fast'); 	// Show Delete button on mouseenter
		}));

		$('.row').on('mouseleave',(function() {
			$('.delete').hide("fast"); 				// Hide delete button on mouseleave
		}))

		$('.row').on('click',(function() {
			$(this).addClass('done');			// Toggle .done class when row clicked
		}));

		$('.row').not('.done').on('click',(function() {
			$(this).find('.tick').show();			// Show/hide tick on click
		}));

		$('.delete').on('click',(function() {
			$(this).parent('.row').remove();		// Delete row after delete clicked
		}))

		$('.done').on('click',(function() {
			if ($(this).hasClass('.done')) {
				alert('done clicked');
				$(this).find('.tick').hide();
				$(this).removeClass('done');			// Toggle .done class when row clicked
				return true;
			}
		}));

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
			checkError();
			addItem();
			currentDate();
			rowInteract();
			return false;
		} 
	});

})




