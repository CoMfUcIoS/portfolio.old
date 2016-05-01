Template.footer.onRendered(function() {
	setTimeout(function(){
	  $(".loader .inner").fadeOut(500, function() {
	    $(".loader").fadeOut(750);
	  });
		
	}, 3000);
});