angular.module('signup.controllers',[]);
angular.module('signup.services',[]);
angular.module('signup.directives',[]);
angular.module('app.signup', [
  'ui.router',
  'signup.controllers',
  'signup.services',
  'signup.directives'
])

.config(function config($stateProvider,ROUTE_INFO) {
  $stateProvider.state(ROUTE_INFO.SIGNUP.STATE, {
    url: ROUTE_INFO.SIGNUP.URL,
    templateUrl: ROUTE_INFO.SIGNUP.TEMPLATE_URL,
    title:ROUTE_INFO.SIGNUP.TITLE
  });
});