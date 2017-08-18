
(function(){
	angular.module('app.layout', [
		'ui.router',
		'layout.controllers'
		])

	.config(function config($stateProvider,ROUTE_INFO) {
		$stateProvider.state(ROUTE_INFO.LAYOUT.STATE, {
			abstract: true,
			templateUrl: ROUTE_INFO.LAYOUT.TEMPLATE_URL
		})
	})
})();