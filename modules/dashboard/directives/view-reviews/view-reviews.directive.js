(function(){

angular.module('dashboard.directives').directive('viewReviews',
    ['$modal','notificationService','dashboardService',
        function ($modal,notificationService,dashboardService) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    var modal;
                    scope.rating = 0;
                    scope.comment = "";
                    el.bind('click', function(e) {

                        if (angular.isDefined(attrs.movie)) {
                            scope.movie = angular.copy(scope.$eval(attrs.movie));
                            scope.editMode = true;
                            scope.title = "Reviews of "+scope.movie.title;
                        }

                        if(modal==undefined){
                            modal = $modal({
                                title: scope.title,
                                scope: scope,
                                templateUrl: '/modules/dashboard/directives/view-reviews/view-reviews.tpl.html',
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
                }
            }

        }]);

})();