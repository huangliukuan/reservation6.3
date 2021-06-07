(function($) {
	$.fn.showToast = function(option) {
		let div = $('<div></div>');
		div.html(option);
		div.css({
			"position": "fixed",
			"top": "50%",
			"left": "50%",
			"transform": "translate(-50%,-50%)",
			"backgroundColor": "#868e96",
			"color": "#fff",
			"padding": "10px",
			"borderRadius": "5px"
		})
		$('body').append(div);
		setTimeout(() => {
			div.remove();
		}, 2000)
	}
})(jQuery)


$('.toPath').on('click', function() {

	  window.location.href =  $(this).data('href');
})
