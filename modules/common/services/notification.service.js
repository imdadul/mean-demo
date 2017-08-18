(function(){

angular.module('common.services').service('notificationService',
    ['$alert','STRINGS',function ($alert,STRINGS) {

      this.showErrorNotification =  function(server_msg) {
        var msg = STRINGS[server_msg];  
        showAlert(msg,'danger');
      }

      this.showSuccessNotification =  function(server_msg) {
        var msg = STRINGS[server_msg];  
        showAlert(msg,'success');
      }

      this.showInfoNotification =  function(server_msg,user,movieName) {
        var msg = STRINGS[server_msg];  
        showAlert(user+msg+movieName,'info');
      }

      function showAlert(msg,type){
        var myAlert = $alert({
            content: msg,
            placement: 'top-right', 
            type: type, 
            keyboard: true,
            show: false,
            duration:3
        });
      
        myAlert.$promise.then(myAlert.show)
      }

    }]);

})();