$(function() {



	//add index-n to link buttons

	$('a').each(function(index){
		$(this).attr('data-index', index);
	});

	$('#lake').on('click', function(){
		$('#campfire').removeClass("selected")
		$(this).addClass("selected")
		
		preventFire();
		
	});
	$('#campfire').on('click', function(){
		$('#lake').removeClass("selected")
		$(this).addClass("selected")
		
		startFire();
		setFireInterval();
	});




	var startFire = function(){
		// console.log("fire")
		$('.btn-default').off('click')
		$('.btn-default').on('click', function(){
			($(this).hasClass("btn-info"))
				? console.log("break")
				: $(this).addClass("btn-warning").addClass("fireup")
			
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
		setTimeout(function(){
			
			$('.btn-default').hasClass('btn-warning')
				? $('.btn-warning').addClass("btn-danger")
				: console.log("no fire to spread")
			spreadFire();
		}, 1500);
	}
	var findIndexNext = function(){

		var nextClassItem = $('.fireup').attr("data-index")
		console.log("firestring", typeof(nextClassItem), nextClassItem)
		nextClassItem = Number(nextClassItem)
		console.log("firenumber", typeof(nextClassItem), nextClassItem)
		var nextNeighbor = nextClassItem+1;
		console.log("next", nextNeighbor)
	
		
		return nextNeighbor;
	}
	var findIndexPast = function(){
		var pastClassItem = $('.fireup').attr("data-index")
		console.log("firestring", typeof(pastClassItem), pastClassItem)
		pastClassItem = Number(pastClassItem)
		console.log("firenumber", typeof(pastClassItem), pastClassItem)
		var pastNeighbor = pastClassItem-1;
		console.log("past", pastNeighbor)
		return pastNeighbor;
	}

	var spreadFire = function(){
		


		var pastIndex = findIndexPast();
		var pastIndexString = pastIndex.toString();
		console.log("pastIndexstring", typeof(pastIndexString), pastIndexString)
		var nextIndex = findIndexNext();
		var nextIndexString = nextIndex.toString();
	

		$('[data-index='+ pastIndexString +']').addClass('btn-warning').addClass('.fireup')
			console.log("came this far")
			
		$('[data-index='+ nextIndexString +']').addClass('btn-warning').addClass('.fireup')
	}


	

});
