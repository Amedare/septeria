var idVideo = 'bpOR_HuHRNs'; // id видео с youtube
var singles = $('.container--singles'),
	concerts = $('.container--concerts'),
	main = $('.container--main'),
	video = $('.video'),
	page = $('.page');

var animate = function(selector, func) {
	return 	$(selector).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', func);
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
		singles.removeClass('show fadeOutDown animated ');
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

// Video manage
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('videoBlock', {
		height: '100%',
		width: '100%',
		videoId: idVideo,
		playerVars: {
			showinfo: 0,
			controls: 0,
			autoplay: 0,
			rel: 0,
			modestbranding: 1
		}
	});
	$('.js-play-video').click(function() {
		if ($(this).hasClass('played')) {
			player.pauseVideo();
			$(this).removeClass('played').addClass('pause');
		} else {
			player.playVideo();
			$(this).removeClass('pause').addClass('played');
		}
	});
	$('.js-sound-video').click(function() {
		if ($(this).hasClass('sound-on')) {
			player.mute();
			$(this).removeClass('sound-on').addClass('sound-off');
		} else {
			player.unMute();
			$(this).removeClass('sound-off').addClass('sound-on');
		}
	});
	$('.js-hide-video').click(function(){
		video.removeClass('show');
		main.addClass('show');
		page.removeClass('page--show-video');
		player.stopVideo();
	});
	$('.js-open-video').click(function(){
		main.removeClass('show');
		video.addClass('show');
		page.addClass('page--show-video');
		player.playVideo();
	});
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpZFZpZGVvID0gJ2JwT1JfSHVIUk5zJzsgLy8gaWQg0LLQuNC00LXQviDRgSB5b3V0dWJlXHJcbnZhciBzaW5nbGVzID0gJCgnLmNvbnRhaW5lci0tc2luZ2xlcycpLFxyXG5cdGNvbmNlcnRzID0gJCgnLmNvbnRhaW5lci0tY29uY2VydHMnKSxcclxuXHRtYWluID0gJCgnLmNvbnRhaW5lci0tbWFpbicpLFxyXG5cdHZpZGVvID0gJCgnLnZpZGVvJyksXHJcblx0cGFnZSA9ICQoJy5wYWdlJyk7XHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBmdW5jKSB7XHJcblx0cmV0dXJuIFx0JChzZWxlY3Rvcikub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgZnVuYyk7XHJcbn1cclxudmFyIGFwcGVuZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcblx0aWYoIShpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcclxuXHRcdCQoJy5pdGVtLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wcmVwZW5kVG8oJy5pdGVtc19fcm93Jyk7XHJcblx0XHRpdGVtLmluc2VydEFmdGVyKCQoJy5pdGVtc19fcm93IC5pdGVtOmZpcnN0JykpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9XHJcbn1cclxuXHJcbiQoJy5qcy1vcGVuLXNpbmdsZXMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdG1haW4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRzaW5nbGVzLmFkZENsYXNzKCdzaG93IGFuaW1hdGVkIGZhZGVJbkRvd24nKTtcclxuXHRhbmltYXRlKHNpbmdsZXMsIGZ1bmN0aW9uKCkge3NpbmdsZXMucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbkRvd24nKX0pO1xyXG5cdHBhZ2UuYWRkQ2xhc3MoJ3BhZ2UtLXNob3ctc2luZ2xlcycpO1xyXG59KTtcclxuJCgnLmpzLWhpZGUtc2luZ2xlcycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0c2luZ2xlcy5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKTtcclxuXHRhbmltYXRlKHNpbmdsZXMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0c2luZ2xlcy5yZW1vdmVDbGFzcygnc2hvdyBmYWRlT3V0RG93biBhbmltYXRlZCAnKTtcclxuXHRcdG1haW4uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLXNob3ctc2luZ2xlcycpO1xyXG5cdH0pO1xyXG59KTtcclxuJCgnLmpzLW9wZW4tY29uY2VydHMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdG1haW4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRjb25jZXJ0cy5hZGRDbGFzcygnc2hvdycpO1xyXG5cdHBhZ2UuYWRkQ2xhc3MoJ3BhZ2UtLXNob3ctY29uY2VydHMnKTtcclxufSk7XHJcbiQoJy5qcy1oaWRlLWNvbmNlcnRzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRjb25jZXJ0cy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdG1haW4uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHRwYWdlLnJlbW92ZUNsYXNzKCdwYWdlLS1zaG93LWNvbmNlcnRzJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIHNpbmdsZXNcclxuJCgnLmpzLXNpbmdsZS1rb21hJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRhcHBlbmRJdGVtKCQodGhpcykpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLWtvbWEgcGFnZS0td2h5IHBhZ2UtLXNoaW5lJykuYWRkQ2xhc3MoJ3BhZ2UtLWtvbWEnKTtcclxufSk7XHJcbiQoJy5qcy1zaW5nbGUtd2h5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRhcHBlbmRJdGVtKCQodGhpcykpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLWtvbWEgcGFnZS0td2h5IHBhZ2UtLXNoaW5lJykuYWRkQ2xhc3MoJ3BhZ2UtLXdoeScpO1xyXG59KTtcclxuJCgnLmpzLXNpbmdsZS1zaGluZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0YXBwZW5kSXRlbSgkKHRoaXMpKTtcclxuXHRwYWdlLnJlbW92ZUNsYXNzKCdwYWdlLS1rb21hIHBhZ2UtLXdoeSBwYWdlLS1zaGluZScpLmFkZENsYXNzKCdwYWdlLS1zaGluZScpO1xyXG59KTtcclxuXHJcbi8vIFZpZGVvIG1hbmFnZVxyXG52YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbnRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcclxudmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG5maXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuXHJcbnZhciBwbGF5ZXI7XHJcbmZ1bmN0aW9uIG9uWW91VHViZVBsYXllckFQSVJlYWR5KCkge1xyXG5cdHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3ZpZGVvQmxvY2snLCB7XHJcblx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR2aWRlb0lkOiBpZFZpZGVvLFxyXG5cdFx0cGxheWVyVmFyczoge1xyXG5cdFx0XHRzaG93aW5mbzogMCxcclxuXHRcdFx0Y29udHJvbHM6IDAsXHJcblx0XHRcdGF1dG9wbGF5OiAwLFxyXG5cdFx0XHRyZWw6IDAsXHJcblx0XHRcdG1vZGVzdGJyYW5kaW5nOiAxXHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLmpzLXBsYXktdmlkZW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdwbGF5ZWQnKSkge1xyXG5cdFx0XHRwbGF5ZXIucGF1c2VWaWRlbygpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdwbGF5ZWQnKS5hZGRDbGFzcygncGF1c2UnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllci5wbGF5VmlkZW8oKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheWVkJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLmpzLXNvdW5kLXZpZGVvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnc291bmQtb24nKSkge1xyXG5cdFx0XHRwbGF5ZXIubXV0ZSgpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdzb3VuZC1vbicpLmFkZENsYXNzKCdzb3VuZC1vZmYnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBsYXllci51bk11dGUoKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnc291bmQtb2ZmJykuYWRkQ2xhc3MoJ3NvdW5kLW9uJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0JCgnLmpzLWhpZGUtdmlkZW8nKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0dmlkZW8ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdG1haW4uYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLXNob3ctdmlkZW8nKTtcclxuXHRcdHBsYXllci5zdG9wVmlkZW8oKTtcclxuXHR9KTtcclxuXHQkKCcuanMtb3Blbi12aWRlbycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRtYWluLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHR2aWRlby5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0cGFnZS5hZGRDbGFzcygncGFnZS0tc2hvdy12aWRlbycpO1xyXG5cdFx0cGxheWVyLnBsYXlWaWRlbygpO1xyXG5cdH0pO1xyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
