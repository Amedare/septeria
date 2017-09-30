var idVideo = 'bpOR_HuHRNs'; // id видео с youtube
var singles = $('.container--singles'),
	concerts = $('.container--concerts'),
	main = $('.container--main'),
	video = $('.video'),
	page = $('.page');

var mobile = $(window).width() < 900;

$(window).resize(function(){
	mobile = $(window).width() < 900;
});

var animate = function(selector, func) {
	return 	$(selector).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', func);
}
var appendItem = function(item) {
	if (!mobile) {
		if (!(item.hasClass('active'))) {
			$('.item.active').removeClass('active').prependTo('.items__row');
			item.insertAfter($('.items__row .item:first')).addClass('active');
		}
	}
}

$('.js-open-singles').click(function(){
	main.removeClass('show');
	if (!mobile) {
		singles.addClass('show animated fadeInDown');
		animate(singles, function() {singles.removeClass('animated fadeInDown')});
	} else singles.addClass('show');
	page.addClass('page--show-singles');
});
$('.js-hide-singles').click(function(){
	if (!mobile) {
		singles.addClass('animated fadeOutDown');
		setTimeout(function() {
			singles.removeClass('show');
		}, 600);
		animate(singles, function() {
			singles.removeClass('fadeOutDown animated');
			main.addClass('show');
			page.removeClass('page--show-singles');
		});
	} else {
		singles.removeClass('show');
		main.addClass('show');
		page.removeClass('page--show-singles');
	}
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
		},
		events: {
            'onStateChange': onPlayerStateChange
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

function onPlayerStateChange(event) {
	if (event.data == 2) {
		$('.js-play-video').removeClass('played').addClass('pause');
	} else if (event.data == 1) {
		$('.js-play-video').removeClass('pause').addClass('played');
	}
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpZFZpZGVvID0gJ2JwT1JfSHVIUk5zJzsgLy8gaWQg0LLQuNC00LXQviDRgSB5b3V0dWJlXHJcbnZhciBzaW5nbGVzID0gJCgnLmNvbnRhaW5lci0tc2luZ2xlcycpLFxyXG5cdGNvbmNlcnRzID0gJCgnLmNvbnRhaW5lci0tY29uY2VydHMnKSxcclxuXHRtYWluID0gJCgnLmNvbnRhaW5lci0tbWFpbicpLFxyXG5cdHZpZGVvID0gJCgnLnZpZGVvJyksXHJcblx0cGFnZSA9ICQoJy5wYWdlJyk7XHJcblxyXG52YXIgbW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPCA5MDA7XHJcblxyXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcblx0bW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPCA5MDA7XHJcbn0pO1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbihzZWxlY3RvciwgZnVuYykge1xyXG5cdHJldHVybiBcdCQoc2VsZWN0b3IpLm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmMpO1xyXG59XHJcbnZhciBhcHBlbmRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdGlmICghbW9iaWxlKSB7XHJcblx0XHRpZiAoIShpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcclxuXHRcdFx0JCgnLml0ZW0uYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLnByZXBlbmRUbygnLml0ZW1zX19yb3cnKTtcclxuXHRcdFx0aXRlbS5pbnNlcnRBZnRlcigkKCcuaXRlbXNfX3JvdyAuaXRlbTpmaXJzdCcpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4kKCcuanMtb3Blbi1zaW5nbGVzJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRtYWluLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0aWYgKCFtb2JpbGUpIHtcclxuXHRcdHNpbmdsZXMuYWRkQ2xhc3MoJ3Nob3cgYW5pbWF0ZWQgZmFkZUluRG93bicpO1xyXG5cdFx0YW5pbWF0ZShzaW5nbGVzLCBmdW5jdGlvbigpIHtzaW5nbGVzLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmYWRlSW5Eb3duJyl9KTtcclxuXHR9IGVsc2Ugc2luZ2xlcy5hZGRDbGFzcygnc2hvdycpO1xyXG5cdHBhZ2UuYWRkQ2xhc3MoJ3BhZ2UtLXNob3ctc2luZ2xlcycpO1xyXG59KTtcclxuJCgnLmpzLWhpZGUtc2luZ2xlcycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0aWYgKCFtb2JpbGUpIHtcclxuXHRcdHNpbmdsZXMuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXREb3duJyk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzaW5nbGVzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHR9LCA2MDApO1xyXG5cdFx0YW5pbWF0ZShzaW5nbGVzLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0c2luZ2xlcy5yZW1vdmVDbGFzcygnZmFkZU91dERvd24gYW5pbWF0ZWQnKTtcclxuXHRcdFx0bWFpbi5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRwYWdlLnJlbW92ZUNsYXNzKCdwYWdlLS1zaG93LXNpbmdsZXMnKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzaW5nbGVzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRtYWluLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRwYWdlLnJlbW92ZUNsYXNzKCdwYWdlLS1zaG93LXNpbmdsZXMnKTtcclxuXHR9XHJcbn0pO1xyXG4kKCcuanMtb3Blbi1jb25jZXJ0cycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0bWFpbi5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdGNvbmNlcnRzLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0cGFnZS5hZGRDbGFzcygncGFnZS0tc2hvdy1jb25jZXJ0cycpO1xyXG59KTtcclxuJCgnLmpzLWhpZGUtY29uY2VydHMnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGNvbmNlcnRzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0bWFpbi5hZGRDbGFzcygnc2hvdycpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLXNob3ctY29uY2VydHMnKTtcclxufSk7XHJcblxyXG5cclxuLy8gc2luZ2xlc1xyXG4kKCcuanMtc2luZ2xlLWtvbWEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGFwcGVuZEl0ZW0oJCh0aGlzKSk7XHJcblx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0ta29tYSBwYWdlLS13aHkgcGFnZS0tc2hpbmUnKS5hZGRDbGFzcygncGFnZS0ta29tYScpO1xyXG59KTtcclxuJCgnLmpzLXNpbmdsZS13aHknKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdGFwcGVuZEl0ZW0oJCh0aGlzKSk7XHJcblx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0ta29tYSBwYWdlLS13aHkgcGFnZS0tc2hpbmUnKS5hZGRDbGFzcygncGFnZS0td2h5Jyk7XHJcbn0pO1xyXG4kKCcuanMtc2luZ2xlLXNoaW5lJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRhcHBlbmRJdGVtKCQodGhpcykpO1xyXG5cdHBhZ2UucmVtb3ZlQ2xhc3MoJ3BhZ2UtLWtvbWEgcGFnZS0td2h5IHBhZ2UtLXNoaW5lJykuYWRkQ2xhc3MoJ3BhZ2UtLXNoaW5lJyk7XHJcbn0pO1xyXG5cclxuLy8gVmlkZW8gbWFuYWdlXHJcbnZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxudGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWVyX2FwaVwiO1xyXG52YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbmZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG5cclxudmFyIHBsYXllcjtcclxuZnVuY3Rpb24gb25Zb3VUdWJlUGxheWVyQVBJUmVhZHkoKSB7XHJcblx0cGxheWVyID0gbmV3IFlULlBsYXllcigndmlkZW9CbG9jaycsIHtcclxuXHRcdGhlaWdodDogJzEwMCUnLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdHZpZGVvSWQ6IGlkVmlkZW8sXHJcblx0XHRwbGF5ZXJWYXJzOiB7XHRcclxuXHRcdFx0c2hvd2luZm86IDAsXHJcblx0XHRcdGNvbnRyb2xzOiAwLFxyXG5cdFx0XHRhdXRvcGxheTogMCxcclxuXHRcdFx0cmVsOiAwLFxyXG5cdFx0XHRtb2Rlc3RicmFuZGluZzogMVxyXG5cdFx0fSxcclxuXHRcdGV2ZW50czoge1xyXG4gICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuanMtcGxheS12aWRlbycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ3BsYXllZCcpKSB7XHJcblx0XHRcdHBsYXllci5wYXVzZVZpZGVvKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXllZCcpLmFkZENsYXNzKCdwYXVzZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGxheWVyLnBsYXlWaWRlbygpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5ZWQnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuanMtc291bmQtdmlkZW8nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzb3VuZC1vbicpKSB7XHJcblx0XHRcdHBsYXllci5tdXRlKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3NvdW5kLW9uJykuYWRkQ2xhc3MoJ3NvdW5kLW9mZicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGxheWVyLnVuTXV0ZSgpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdzb3VuZC1vZmYnKS5hZGRDbGFzcygnc291bmQtb24nKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuanMtaGlkZS12aWRlbycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHR2aWRlby5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0bWFpbi5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0cGFnZS5yZW1vdmVDbGFzcygncGFnZS0tc2hvdy12aWRlbycpO1xyXG5cdFx0cGxheWVyLnN0b3BWaWRlbygpO1xyXG5cdH0pO1xyXG5cdCQoJy5qcy1vcGVuLXZpZGVvJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdG1haW4ucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdHZpZGVvLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRwYWdlLmFkZENsYXNzKCdwYWdlLS1zaG93LXZpZGVvJyk7XHJcblx0XHRwbGF5ZXIucGxheVZpZGVvKCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcclxuXHRpZiAoZXZlbnQuZGF0YSA9PSAyKSB7XHJcblx0XHQkKCcuanMtcGxheS12aWRlbycpLnJlbW92ZUNsYXNzKCdwbGF5ZWQnKS5hZGRDbGFzcygncGF1c2UnKTtcclxuXHR9IGVsc2UgaWYgKGV2ZW50LmRhdGEgPT0gMSkge1xyXG5cdFx0JCgnLmpzLXBsYXktdmlkZW8nKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheWVkJyk7XHJcblx0fVxyXG59Il0sImZpbGUiOiJtYWluLmpzIn0=
