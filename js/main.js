var singles = $('.container--singles'),
	concerts = $('.container--concerts'),
	main = $('.container--main'),
	page = $('.page');

var animate = function(s, func) {
	return 	$(s).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', func);
}

var appendItem = function(item) {
	if(!(item.hasClass('active'))) {
		$('.item.active').removeClass('active').prependTo('.items__row');
		item.insertAfter($('.items__row .item:first')).addClass('active');
	}
}

$('.js-open-singles').click(function(){
	main.removeClass('show');
	singles.addClass('show animated fadeInDown');
	animate(singles, function() {singles.removeClass('animated fadeInDown')});
	page.addClass('page--show-singles');
});
$('.js-hide-singles').click(function(){
	singles.addClass('animated fadeOutDown');
	animate(singles, function() {
		singles.removeClass('animated fadeOutDown show');
		main.addClass('show');
		page.removeClass('page--show-singles');
	});
});
$('.js-open-concerts').click(function(){
	main.removeClass('show');
	concerts.addClass('show');
	page.addClass('page--show-concerts');
});
$('.js-hide-concerts').click(function(){
	concerts.removeClass('show');
	main.addClass('show');
	page.removeClass('page--show-concerts');
});


// singles
$('.js-single-koma').click(function(){
	appendItem($(this));
	page.removeClass('page--koma page--why page--shine').addClass('page--koma');
});
$('.js-single-why').click(function(){
	appendItem($(this));
	page.removeClass('page--koma page--why page--shine').addClass('page--why');
});
$('.js-single-shine').click(function(){
	appendItem($(this));
	page.removeClass('page--koma page--why page--shine').addClass('page--shine');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzaW5nbGVzID0gJCgnLmNvbnRhaW5lci0tc2luZ2xlcycpLFxyXG5cdGNvbmNlcnRzID0gJCgnLmNvbnRhaW5lci0tY29uY2VydHMnKSxcclxuXHRtYWluID0gJCgnLmNvbnRhaW5lci0tbWFpbicpLFxyXG5cdHBhZ2UgPSAkKCcucGFnZScpO1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbihzLCBmdW5jKSB7XHJcblx0cmV0dXJuIFx0JChzKS5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jKTtcclxufVxyXG5cclxudmFyIGFwcGVuZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcblx0aWYoIShpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcclxuXHRcdCQoJy5pdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wcmVwZW5kVG8oJy5pdGVtc19fcm93Jyk7XHJcblx0XHRpdGVtLmluc2VydEFmdGVyKCQoJy5pdGVtc19fcm93IC5pdGVtOmZpcnN0JykpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcbn1cclxuXHJcbiQoJy5qcy1vcGVuLXNpbmdsZXMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdG1haW4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRzaW5nbGVzLmFkZENsYXNzKCdzaG93IGFuaW1hdGVkIGZhZGVJbkRvd24nKTtcclxuXHRhbmltYXRlKHNpbmdsZXMsIGZ1bmN0aW9uKCkge3NpbmdsZXMucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbkRvd24nKX0pO1xyXG5cdHBhZ2UuYWRkQ2xhc3MoJ3BhZ2UtLXNob3ctc2luZ2xlcycpO1xyXG59KTtcclxuJCgnLmpzLWhpZGUtc2luZ2xlcycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0c2luZ2xlcy5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKTtcclxuXHRhbmltYXRlKHNpbmdsZXMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0c2luZ2xlcy5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24gc2hvdycpO1xyXG5cdFx0bWFpbi5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0tc2hvdy1zaW5nbGVzJyk7XHJcblx0fSk7XHJcbn0pO1xyXG4kKCcuanMtb3Blbi1jb25jZXJ0cycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0bWFpbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdGNvbmNlcnRzLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0cGFnZS5hZGRDbGFzcygncGFnZS0tc2hvdy1jb25jZXJ0cycpO1xyXG59KTtcclxuJCgnLmpzLWhpZGUtY29uY2VydHMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGNvbmNlcnRzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0bWFpbi5hZGRDbGFzcygnc2hvdycpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLXNob3ctY29uY2VydHMnKTtcclxufSk7XHJcblxyXG5cclxuLy8gc2luZ2xlc1xyXG4kKCcuanMtc2luZ2xlLWtvbWEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGFwcGVuZEl0ZW0oJCh0aGlzKSk7XHJcblx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0ta29tYSBwYWdlLS13aHkgcGFnZS0tc2hpbmUnKS5hZGRDbGFzcygncGFnZS0ta29tYScpO1xyXG59KTtcclxuJCgnLmpzLXNpbmdsZS13aHknKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGFwcGVuZEl0ZW0oJCh0aGlzKSk7XHJcblx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0ta29tYSBwYWdlLS13aHkgcGFnZS0tc2hpbmUnKS5hZGRDbGFzcygncGFnZS0td2h5Jyk7XHJcbn0pO1xyXG4kKCcuanMtc2luZ2xlLXNoaW5lJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRhcHBlbmRJdGVtKCQodGhpcykpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLWtvbWEgcGFnZS0td2h5IHBhZ2UtLXNoaW5lJykuYWRkQ2xhc3MoJ3BhZ2UtLXNoaW5lJyk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
