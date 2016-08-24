
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
				case "approach":
					scriptsToGetLoaded.push("js/libs/typed/typed.min.js");
					scriptsToGetLoaded.push("assets/home.min.js");
					callbacks[0] = function(){
						console.log(loadScript.currentPage+" page initialized...");
					};
					callbacks[1] = function(){
						console.log(loadScript.currentPage+" typed.min.js initialized...");
					};
					break;
				case "culture":
				case "cases":				
					scriptsToGetLoaded.push("assets/site.min.js");
					callbacks[0] = function(){
						console.log(loadScript.currentPage+" page initialized...");
					};
					break;
				case "member":				
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
					document.getElementById("site-loader").className  = "site-loader hide";
					document.getElementById("site-wrapper").className = "";
				},1000);
			} 
		};

		var mainScript =  document.createElement('script');					    		 
		mainScript.src = "assets/plugins.min.js";
    	document.head.appendChild(mainScript);
    	mainScript.onload = function() {
			execteScripts(); 
		}
	}
};

(function(){
 	loadScript.decidePage();
})();
