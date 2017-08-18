(function(){

angular.module('dashboard.directives').directive('addEditMovie',
    ['$modal','$alert','notificationService','dashboardService',
        function ($modal,$alert,notificationService,dashboardService) {
            return {
                restrict: 'E',
                link: function (scope, el, attrs) {
                    var modal;
                    el.bind('click', function(e) {

                        if (angular.isDefined(attrs.movie)) {
                            scope.movie = angular.copy(scope.$eval(attrs.movie));
                            scope.editMode = true;
                            scope.title = "Edit "+scope.movie.title;
                        }
                        else {
                            scope.editMode = false;
                            scope.title = 'Add New Movie'
                        }

                        if(modal==undefined){
                            modal = $modal({
                                title: scope.title,
                                scope: scope,
                                templateUrl: '/modules/dashboard/directives/add-edit-movie/add-edit-movie.html',
                                show: false
                            });
                        }
                        
                        modal.$promise.then(function () {
                            modal.show();
                        });
                    });

                    scope.cancel = function () {
                       modal.hide();
                    }

                    scope.add = function(movie){
                        if(typeof movie.actors == "string"){
                            movie.actors = movie.actors.split(',');
                        }
                        dashboardService.addMovie(movie).then(function(res){
                            notificationService.showSuccessNotification(res.data.msg)
                            scope.movies.push(res.data.movie)
                        },function(err){
                            notificationService.showErrorNotification(err.data.error)
                        })
                    }

                    scope.edit = function(movie){
                        if(typeof movie.actors == "string"){
                            movie.actors = movie.actors.split(',');
                        }

                        dashboardService.editMovie(movie).then(function(res){
                            notificationService.showSuccessNotification(res.data.msg)
                            for(var i = 0; i < scope.movies.length; i++){
                                if(scope.movies[i]._id == res.data.movie._id) {
                                    scope.movies[i] = res.data.movie;
                                    break;
                                }
                            }
                        },function(err){
                            notificationService.showErrorNotification(err.data.error)
                        })
                    }
                }
            }

        }]);

})();