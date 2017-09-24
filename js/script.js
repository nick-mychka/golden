$(document).ready(function() {

	
	$(".burger_nav").on("click", (function() {
		$("nav").toggleClass("menu_scrol");
	}));

	$(".burger_nav").on("click", (function() {
			$(this).toggleClass("active");
		}));

})
