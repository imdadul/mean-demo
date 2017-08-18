(function(){

  angular.module('dashboard.controllers')
  .controller('DashboardController', ['$scope','notificationService','dashboardService','$rootScope','socket','$cookies',
   function($scope,notificationService,dashboardService,$rootScope,socket,$cookies) {  

   $scope.orderByProp = $cookies.get('lastSoretedProp') || 'title';
    
    

    var init = function(){
      dashboardService.getMovies().then(function(res){
        $scope.movies = res.data.movies;
      },function(err){
        notificationService.showErrorNotification(err.data.error)
      })
    }

    
    $scope.hasRated = function(movie){
      for(var i=0;i<movie.ratings.length;i++){
        if(movie.ratings[i].user.email == $rootScope.globals.email){
          return true;
        }
      }
      return false;
    }
    //Events

    $scope.sort = function(prop){
      if($scope.orderByProp == prop) {
        if($scope.orderByProp.startsWith('-')){
          $scope.orderByProp = prop;
        }
        else  $scope.orderByProp = '-' + prop;
      }
      else $scope.orderByProp = prop;

      $cookies.put('lastSoretedProp',$scope.orderByProp);
    }

    $scope.delete = function(movie){
      dashboardService.deleteMovie(movie).then(function(res){
        notificationService.showSuccessNotification(res.data.msg)
        var index = -1;
        for(var i = 0; i < $scope.movies.length; i++){
          if($scope.movies[i].title == movie.title) {
              index = i;
              break;
          }
        }
        $scope.movies.splice(index,1);
      },function(err){
          notificationService.showErrorNotification(err.data.error)
      })
    }


    // Notification listener

    socket.on('PUSH_MOVIE_EDITED', function (data) {
      if($rootScope.globals.email==data.email) return; // Do nothing, he was the initiator of the event. Ideally, the iniator client should not recieve any data.
      notificationService.showInfoNotification('PUSH_MOVIE_EDITED',data.email,data.movie.title);

      if(data.movie){
        var index = getIndex($scope.movies,data.movie._id)
        $scope.movies[index] = data.movie
      }
    });

    socket.on('PUSH_MOVIE_RATED', function (data) {
      if($rootScope.globals.email==data.email) return; // Do nothing, he was the initiator of the event. Ideally, the iniator client should not recieve any data.
      notificationService.showInfoNotification('PUSH_MOVIE_RATED',data.email,data.movie.title);

      if(data.movie){
        var index = getIndex($scope.movies,data.movie._id)
        $scope.movies[index] = data.movie
      }
    });

    socket.on('PUSH_MOVIE_ADDED', function (data) {
      if($rootScope.globals.email==data.email) return; // Do nothing, he was the initiator of the event. Ideally, the iniator client should not recieve any data.
      notificationService.showInfoNotification('PUSH_MOVIE_ADDED',data.email,data.movie.title);

      if(data.movie){
        $scope.movies.push(data.movie)
      }
    });

    socket.on('PUSH_MOVIE_DELETED', function (data) {
      if($rootScope.globals.email==data.email) return; // Do nothing, he was the initiator of the event. Ideally, the iniator client should not recieve any data.
      var index = getIndex($scope.movies,data.movie._id)

      notificationService.showInfoNotification('PUSH_MOVIE_DELETED',data.email,$scope.movies[index].title);
      $scope.movies.splice(index,1)
    });

    function getIndex(collection,id){
      for(var i = 0; i < collection.length; i++){
        if(collection[i]._id == id) {
            return i;
        }
      }
      return -1;
    }


    // Initialization
    init();
  }
  ])
})();