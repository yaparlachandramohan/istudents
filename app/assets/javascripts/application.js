// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require popper
//= require bootstrap
//= require_tree .


$(document).ready(function() {
			//Quotes rotator
			var divs = $('.cbp-qtcontent');
			
			function fade() {
				var current = $('.current');
				var currentIndex = divs.index(current),
					nextIndex = currentIndex + 1;
				
				if (nextIndex >= divs.length) {
					nextIndex = 0;
				}
				
				var next = divs.eq(nextIndex);
				
				next.stop().fadeIn(1500, function() {
					$(this).addClass('current');
				});
				
				current.stop().fadeOut(1500, function() {
					$(this).removeClass('current');
					_startProgress()
					setTimeout(fade, 8000);
				});
			}
			
			function _startProgress(){
				$(".cbp-qtprogress").removeAttr('style');
				$(".cbp-qtprogress").animate({
					width:"100%",
				} , 8000);
			}
			
			_startProgress()
			setTimeout(fade, 8000);
		});