
(function () {
  'use strict';
  angular.module('signup.services')
  .factory('signupService', SignupService);

  SignupService.$inject = ['$http','CONFIG'];

  function SignupService($http,CONFIG) {

    function signup(data) {
      return $http.post(CONFIG.BASE_URL+'/users/signup',data);
    }

    return {
      signup:signup
    }
  }

})();