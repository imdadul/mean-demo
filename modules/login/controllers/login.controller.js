(function(){

  angular.module('login.controllers')
  .controller('LoginController', ['$scope','notificationService','loginService','$state','ROUTE_INFO', 
    function($scope,notificationService,loginService, $state,ROUTE_INFO) {  

      $scope.email = "";
      $scope.password = "";

    //Events

      $scope.login =function(){
        loginService.login({email:$scope.email,password:$scope.password}).then(function(res,err){
          loginService.setCredentials($scope.email,res.data.jwt,$scope.rememberMe);
          $state.go(ROUTE_INFO.DASHBOARD.STATE);
        },function(err){
          notificationService.showErrorNotification(err.data.error);
        })
      }
    
  }
  ])
})();