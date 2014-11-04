$(document).ready(function() {

	// Declare functions

	// getDate

	function currentDate() {
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var fullDate = 
			((''+day).length<2 ? '0' : '') + day + '-' +
			((''+month).length<2 ? '0' : '') + month + '-' +
			d.getFullYear();										// Get date in DD/MM/YYYY format
		$('.date').eq(-1).append(fullDate);							// Append to date class
	}

	// addItem

	function addItem() {
		var item = $('input').val();
		var row = $('<div class="row"><div class="tick"></div><h3 class="item"></h3><p class="date"></p><div class="delete"></div></div>');
		$('.wrap').append(row);
		$('.row').show();
		$('.item').eq(-1).append(item);
		$('input').val('');
	}

	// show enter icon

	function showEnter() {
		$('input').keyup(function () {
			var len = $(this).val().length;
			if (len > 0) {
				$('form').find('.enter').css('display', 'block'); 	// Show enter icon after 1 character enetred
			} else {
				$('form').find('.enter').css('display', 'none');  	// Hide enter icon if no character entered
			}
		})
	}

	// show delete button

	function showDelete() {

		$('.row').on('mouseenter',(function() {
			$(this).find('.delete').show('fast');					// Show Delete button on mouseenter 						
		}))

		$('.row').on('mouseleave',(function() {
			$('.delete').hide(); 									// Hide delete button on mouseleave
		}))

		$('.delete').on('click',(function() {
			$(this).parent('.row').slideUp('fast', function() {
				$(this).remove();									// Delete row after delete clicked
			})
		}))
	}

	// row completed

	function rowComplete() {

		$('.row').on('click',(function() {							// Toggle .done class when row clicked
			if ($(this).is('#done')) {
				$(this).removeAttr('id');
				$(this).find('.tick').hide();
			} else {
				$(this).attr('id', 'done');
				$(this).find('.tick').show();
			}
		}));
	}

	// On enter keydown, do the following

	$('.wrap').on('keydown', 'input',(function (enter) {
		if (enter.keyCode == 13) {									// If keydown is Enter key
			if ($('input').val().length === 0) {					// If input is empty - show error
				$('.error').show();
				return false;
			} else {												
				$('.error').hide();									// Else hide error then add Item & Date
				addItem();
				currentDate();
				showDelete();
				rowComplete();
				return false;
			}
			return false;
		}
	}));

	showEnter();

})