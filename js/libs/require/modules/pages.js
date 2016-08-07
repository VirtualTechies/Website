requirejs(['./common'], function () {

	var page = "";
	requirejs(['jquery'], function () {		
		console.log("jquery configured...");
		page =  (typeof $("body").data("page") != "undefined") ? $("body").data("page") : "home";
	
		switch(page) {
			case "home":
				requirejs(['materialize', 'lazy', 'data', 'owlCarousel', 'mobileDetect', 'site'], function () {		
					console.log("jquery and dependencies configured...");
					virtual.initialize();
				});				
				break;
			case "culture":
			case "approach":
			case "cases":
				requirejs(['materialize', 'lazy', 'data', 'site'], function () {		
					console.log("jquery and dependencies configured...");
					virtual.initialize();
				});
				break;
			default:
				break;
		}
	});		
});