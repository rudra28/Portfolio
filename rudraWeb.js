var rudraWeb = angular.module("rudraWeb", []);

function main() {
  $('.row').hide();
  $('.row').fadeIn(1000);
  
  $('.project').hide();
  
  
  $('.img').on('click', function() {
	$(this).next().slideToggle(400);
    $(this).toggleClass('active');
	});
}

$(document).ready(main);