
var loadScript = { 

	currentPage: document.getElementsByTagName("BODY")[0].getAttribute("data-page"),

	decidePage: function(){ 

		if(typeof loadScript.currentPage != "undefined") {
		
			var scriptsToGetLoaded = [], callbacks = [];

			switch (loadScript.currentPage) {
				case "home":
				case "services":
					scriptsToGetLoaded.push("assets/home.min.js");
					callbacks[0] = function(){
						console.log(loadScript.currentPage+" page initialized...");
					};
					break;
				case "culture":
				case "approach":
				case "cases":				
					scriptsToGetLoaded.push("assets/site.min.js");
					callbacks[0] = function(){
						console.log(loadScript.currentPage+" page initialized...");
					};
					break;
				default: 
					break; 
			}
			if(scriptsToGetLoaded.length) {
				this.loadPageWiseScripts(scriptsToGetLoaded, callbacks);
			}
		} 
	},

	loadPageWiseScripts: function(scripts, callbacks) { 
		
		var execteScripts = function(){
			if(scripts.length){ 
				var script = undefined;
				for (var i = 0; i < scripts.length; i++) {				
					script = document.createElement('script');					    		 
				    script.src = scripts[i];
				    if (typeof callbacks[i] !== 'function') {
						throw new Error('Not a valid callback');  
					}
					else {
						callbacks[i](); 
					}
				    document.head.appendChild(script);	
				}

				setTimeout(function(){ 
					$(".site-loader").addClass("hide");
					$("#site-wrapper").removeClass("hide");
				},1000);
			} 
		};

		var mainScript =  document.createElement('script');					    		 
		mainScript.src = "assets/plugins.min.js";
    	document.head.appendChild(mainScript);
    	execteScripts();
	}
};

(function(){
 	loadScript.decidePage();
})();
