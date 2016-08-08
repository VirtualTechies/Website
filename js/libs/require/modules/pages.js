requirejs(['./common'], function () {

	var page = ""; 

	if(typeof document.getElementsByTagName("BODY")[0].getAttribute('data-page') != "undefined"){
		page = document.getElementsByTagName("BODY")[0].getAttribute('data-page');
	}else{
		page = "home";
	}

	requirejs(['jQuery'], function () {		
		switch(page) {
			case "home":
				requirejs(['homeProd'], function () {		
					console.log("jquery and dependencies configured...");
				});				
				break;
			case "culture":
			case "approach":
			case "cases":
				requirejs(['siteProd'], function () {		
					console.log("jquery and dependencies configured...");				
				});
				break;
			default:
				break;
		}			
	});		
});