/**
 *	app.initModule(@element, @module, @params)
 *	-	load @module if @element exists
 */
app.initModule = function (element, module, params) {
	try {
		log('---->app.initModule(' + element + ', ' + module + ')');
		if (element.length) {
			log('calling: ' + module);
			return requirejs(["modules/" + module], function (Module) {
				log(Module);
				return Module.Initialize(element, params);
			});
		}
	} catch (error) {
		log('<!>app.initModule Method: ' + error);
	}
}; //-- app.initModule(@element, @module, @params)