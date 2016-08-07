requirejs(['./common'], function () {

	var page =  (typeof this.page != "undefined") ? this.page : "home";

	switch(page) {
		case "home":
			requirejs(['jquery', 'materialize', 'lazy', 'data', 'owlCarousel', 'mobileDetect', 'site'], function () {		
				console.log("jquery and dependencies configured...");
				virtual.initialize();
			});				
			break;
		case "culture":
		case "approach":
		case "cases":
			requirejs(['jquery', 'materialize', 'lazy', 'data', 'site'], function () {		
				console.log("jquery and dependencies configured...");
				virtual.initialize();
			});
			break;
		default:
			break;
	}
});