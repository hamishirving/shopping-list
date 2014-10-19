$(document).ready(function() {

	$('input').keyup(function () {
		var len = $(this).val().length;
		if (len > 0) {
			alert('1 entered'); 		// Should show enter icon

			// $(this).css({
			// 	'background-image': 'url(../img/enter.svg)',
   //  			'background-repeat': 'no-repeat',
   //  			'background-size': '20px 15px',
   //  			'background-position': '360px 38px'
			// })
			
		}
	})

	$('.row').mouseenter(function() {
		$('.delete').show();
	})
	$('.row').mouseleave(function() {
		$('.delete').hide();
	})

	// $('.row:not(#done)').click(function () { // Click on row with .row but not #done
	// 	// alert('row clicked');
	// 	$(this).css('.tick', {display: 'block'});
	// 	$(this).attr('id', 'done'); // Apply new ID of #done
	// })

	// $('#done').click(function () {
	// 	// alert('complete clicked');
	// 	$(this).removeAttr('id', 'done'); // Remove #done
	// })

	$('.row').click(function() {
		$('.row').toggle(function() {
			alert('first click');
			// $('.row > h3').css({'text-decoration':'line-through',
			// 			'opacity':'0.4'});
			// $('.row > p').css({'text-decoration':'line-through',
			// 			'opacity':'0.4'})
		}, function() {
			alert('2nd click');
			// $('.row > h3').css({'text-decoration':'',
			// 			'opacity':'1'});
			// $('.row > p').css({'text-decoration':'',
			// 			'opacity':'1'})
		});
	}

})