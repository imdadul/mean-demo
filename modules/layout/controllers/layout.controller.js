(function(){
	angular.module('layout.controllers', [])
	.controller('LayoutController',LayoutController);

	LayoutController.$inject = ['$scope','ROUTE_INFO','$state','$location','loginService','$rootScope','socket','notificationService']
	function LayoutController($scope,ROUTE_INFO,$state,$location,loginService,$rootScope,socket,notificationService){

		$scope.ROUTE_INFO = ROUTE_INFO;
		
		$scope.loginService = loginService;
		$scope.email = loginService.isAuthenticated() ? $rootScope.globals.email:'';
		$scope.isActive = function (item) {
			if ($location.path().indexOf(item) != -1) {
				return true;
			}
			return false;
		};

		$scope.logout = function(){
			loginService.logout();
		}

		
	}
})();