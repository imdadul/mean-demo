
(function () {
  'use strict';
  angular.module('dashboard.services')
  .factory('dashboardService', DashboardService);

  DashboardService.$inject = ['$http','CONFIG'];

  function DashboardService($http,CONFIG) {

    function getMovies() {
      return $http.get(CONFIG.BASE_URL+'/movies'); // Aditional parameter for pagination.
    }
    function addMovie(data) {
      return $http.post(CONFIG.BASE_URL+'/movies',getPostObjectParam(data)); // Aditional parameter for pagination.
    }
    function editMovie(movie) {
      return $http.put(CONFIG.BASE_URL+'/movies/'+movie._id,movie);
    }

    function rateMovie(id,data) {
      return $http.put(CONFIG.BASE_URL+'/movies/rating/'+id,data);
    }
    function deleteMovie(movie) {
      return $http.delete(CONFIG.BASE_URL+'/movies/'+movie._id);
    }

    function getPostObjectParam(param){
      var obj = {
        title :param.title,
        releaseDate: param.releaseDate,
        duration : param.duration,
        actors : param.actors,
        director : param.director
      }
      return obj;
    }

    return {
      getMovies:getMovies,
      addMovie:addMovie,
      editMovie:editMovie,
      deleteMovie:deleteMovie,
      rateMovie:rateMovie
    }
  }

})();