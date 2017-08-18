(function(){

angular.module('dashboard.directives').directive('addRating',
    ['$modal','notificationService','dashboardService',
        function ($modal,notificationService,dashboardService) {
            return {
                restrict: 'E',
                link: function (scope, el, attrs) {
                    var modal;
                    scope.rating = 0;
                    scope.comment = "";
                    el.bind('click', function(e) {

                        if (angular.isDefined(attrs.movie)) {
                            scope.movie = angular.copy(scope.$eval(attrs.movie));
                            scope.editMode = true;
                            scope.title = "Rate '"+scope.movie.title+"'";
                        }

                        if(modal==undefined){
                            modal = $modal({
                                title: scope.title,
                                scope: scope,
                                templateUrl: '/modules/dashboard/directives/add-rating/add-rating.tpl.html',
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

                    scope.submit = function(movie){
                        //this.movies.push(movie);
                        
                        dashboardService.rateMovie(movie._id,{rating:this.rating,comment:this.comment}).then(function(res){
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

                    scope.onUpdate = function($event){
                         scope.rating  = $event.rating;
                    }
                }
            }

        }]);

})();