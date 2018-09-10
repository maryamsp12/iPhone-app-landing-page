$(document).ready(function(){
	
	$('.card-body').hover(
//on mouse hover
		function(){
			$(this).animate({
				margintop:"-=3%",
			
			},200);
		},
//on mouse exit
		function(){
			$(this).animate({
				marginTop:"0%"
			},200);

			}
			);
});
		