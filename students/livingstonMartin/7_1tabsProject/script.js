$(document).ready(function() {
	//starts with grape div selected
	$(".nav li:first").addClass('tabSelected');
	$("#tab1").show();
	var tabNum = 1;

	$(".tab").mouseover(function() {
		tabNum = $(this).val();
		
		//adds and removes the tabSelected class list elements in the nav bar
		$(".tab").removeClass('tabSelected');
		$(this).addClass('tabSelected');

		//hides all divs
		$(".review").hide(); 

		//shows only selected div
		$("#tab"+ tabNum).show(); 
		});
});