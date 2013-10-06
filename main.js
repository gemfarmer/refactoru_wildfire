$(function() {


$( "li" ).each(function( ) {
  console.log( index + ": " + $( this ).text() );
});

// var setIndex = function(element){


// 	for (var i = 0; i < element.length; i++) {
// 		element[i].addClass('data-index' +i)
// 	};
// }

// setIndex($('ul'));

$('#lake').on('click', function(){
	$('#campfire').removeClass("selected")
	$(this).addClass("selected")
	
	preventFire();
	
});
$('#campfire').on('click', function(){
	$('#lake').removeClass("selected")
	$(this).addClass("selected")
	
	spreadFire();
	setFireInterval();
});


var spreadFire = function(){
	console.log("fire")
	$('.btn-default').off('click')
	$('.btn-default').on('click', function(){
		($(this).hasClass("btn-info"))
			? console.log("break")
			: $(this).addClass("btn-warning")
	})

}
var preventFire = function(){
	console.log("water")
	$('.btn-default').off('click')
	$('.btn-default').on('click', function(){
		($(this).hasClass("btn-warning") || $(this).hasClass("btn-danger")) 
			? console.log("break")
			: $(this).addClass("btn-info")
	
	})

}



var setFireInterval = function(){
	setInterval(function(){
		
		$('.btn-default').hasClass('btn-warning')
			? $('.btn-warning').addClass("btn-danger")
			: console.log("no fire to spread")

		var neighbor = $('.btn-default').parents('li').next().children('btn-default');

		console.log(neighbor)
		if (neighbor.hasClass('btn-info')){
			console.log("fire cannot breach water");
		}
		else {
			neighbor.addClass('btn-danger');
		}
		neighbor.css("background-color", "black")
			
	
	}, 1500);
}

});
