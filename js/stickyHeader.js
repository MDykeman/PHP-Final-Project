//Finds the coordinates of navbar relative to the top of the document
	var navPosition = $('#navMain').offset().top;
    console.log(navPosition);

	function stickyNav(){
    
		var navFixed = $(window).scrollTop(); //Finds vertical length from top of the window
    
    //If vertical length is greater than the offset from the top, add class
		if(navFixed > navPosition){
			$('#navMain').switchClass("float", "sticky", 1000, "easeInOutQuad" );
		}else{
			$('#navMain').switchClass("sticky", "float", 1000, "easeInOutQuad" );
		}
	};

	//Calls the function when window scrolling event occurs
	$(window).scroll(function() {
    	stickyNav();  
	}); 