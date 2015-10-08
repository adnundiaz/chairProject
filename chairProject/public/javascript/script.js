$(function(){

	for (var i=0;i<12;i++){
		for (var j=0;j<12;j++){
			$("#room").append("<div id=chair-"+i+"-"+j+" class='transparent'></div>");
		}	
	}

	$(".transparent").click(function(){
		$(this).toggleClass("selected");
	});

	$(".selected").click(function(){
		$(this).toggleClass("selected");
	});

});


