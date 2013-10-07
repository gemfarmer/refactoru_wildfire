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
		$('#land .btn').off('click')
		$('#land .btn').on('click', function(){
			($(this).hasClass("btn-info"))
				? console.log("break")
				: $(this).addClass("btn-warning").addClass("fireup")
			
		})
	}
	var preventFire = function(){
		console.log("water")
		$('#land .btn').off('click')
		$('#land .btn').on('click', function(){
			($(this).hasClass("btn-warning") || $(this).hasClass("btn-danger")) 
				? console.log("break")
				: $(this).addClass("btn-info")
		
		})

	}
	var setFireInterval = function(){
		setInterval(function(){
			// ($('.fireup').hasClass("btn-info"))
			// 	? console.log("break")
			// 	: $('.fireup').addClass("btn-danger").removeClass('fireup')
			$('#land .btn').hasClass('btn-warning')
				? $('.btn-warning').addClass("btn-danger")
				: console.log("no fire to spread")
			spreadFire();
			$('.btn-danger').hasClass('firenext')
				? $('.btn-danger').removeClass('firenext')
				: console.log("firenext not removed")
			$('.btn-danger').hasClass('fireprev')
				? $('.btn-danger').removeClass('fireprev')
				: console.log("firenext not removed")
			// if($('btn-default').hasClass('btn-danger')){
			// 	$('btn-danger').removeClass('fireup');
			// }
		}, 1500);
	}
	var findIndexNext = function(){

		var nextClassItem = $('.firenext').attr("data-index") || $('.fireup').attr("data-index")
		console.log("firestring", typeof(nextClassItem), nextClassItem)
		nextClassItem = Number(nextClassItem)
		console.log("firenumber", typeof(nextClassItem), nextClassItem)
		var nextNeighbor = nextClassItem+1;
		console.log("next", nextNeighbor)
	
		
		return nextNeighbor;
	}
	var findIndexPast = function(){
		var pastClassItem = $('.fireprev').attr("data-index") || $('.fireup').attr("data-index")
		console.log("firestring", typeof(pastClassItem), pastClassItem)
		pastClassItem = Number(pastClassItem)
		console.log("firenumber", typeof(pastClassItem), pastClassItem)
		var pastNeighbor = pastClassItem-1;
		console.log("past", pastNeighbor)
		return pastNeighbor;
	}

	var spreadFire = function(){
		
		
		console.log("pastIndexstring", typeof(pastIndexString), pastIndexString)
		var nextIndex = findIndexNext();
		var nextIndexString = nextIndex.toString();
		var pastIndex = findIndexPast();
		var pastIndexString = pastIndex.toString();

		if (pastIndex>1 && (!$('[data-index='+ pastIndexString +']').hasClass('btn-info'))){
			$('[data-index='+ pastIndexString +']').addClass('btn-warning').addClass('fireprev')
			console.log("backpedalled this far")
		}
		if(nextIndex<83 && (!$('[data-index='+ nextIndexString +']').hasClass('btn-info'))){
			$('[data-index='+ nextIndexString +']').addClass('btn-warning').addClass('firenext')
			console.log("pushed this far")
		}
	}


	

});
