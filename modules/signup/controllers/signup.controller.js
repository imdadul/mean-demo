(function(){

  angular.module('signup.controllers')
  .controller('signupController', ['$scope','notificationService','signupService','loginService','$state','ROUTE_INFO',
   function($scope,notificationService,signupService,loginService,$state,ROUTE_INFO) {  
    
    $scope.email = "";
    $scope.password = "";

    //Events

    $scope.signup =function(){
      signupService.signup({email:$scope.user.email,password:$scope.user.password}).then(function(res){
        loginService.setCredentials($scope.user.email,res.data.jwt);
        $state.go(ROUTE_INFO.DASHBOARD.STATE);
      },function(err){
        notificationService.showErrorNotification(err.data.error);
      })
    }

  }])
})();