


// --------------------------- SLIDER -----------------------------
	
$('#slider').slidesjs({
        width: 940,										// width of images
        height: 350,									// height of images
        start: 1,										// you can state which slide to start on
		navigation: {active: true, effect: "slide"},		// [boolean] Generates next and previous buttons.
        												// You can set to false and use your own buttons.
        												// User defined buttons must have the following:
        												// previous button: class="slidesjs-previous slidesjs-navigation"
        												// next button: class="slidesjs-next slidesjs-navigation"
        pagination: { active:true, effect: "slide"},		// can be SLIDE or FADE
        effect: { slide: {speed: 400} },					// effect used and speed it happens
		
        play: {active: false, effect: "slide", interval: 4000, auto: true, swap: true, pauseOnHover: false, restartDelay: 5000 }
				// generate play and stop buttons // can be slide or fade  // how long spent on each slide //start playing on page load
				// show/hide stop and play buttons // pause a playing slide show on hover // restart delay in inactve slideshow
		});

