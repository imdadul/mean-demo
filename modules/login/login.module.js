angular.module('login.controllers',[]);
angular.module('login.services',[]);
angular.module('login.directives',[]);
angular.module('app.login', [
  'ui.router',
  'login.controllers',
  'login.services',
  'login.directives'
])

.config(function config($stateProvider,ROUTE_INFO) {
  $stateProvider.state(ROUTE_INFO.LOGIN.STATE, {
    url: ROUTE_INFO.LOGIN.URL,
    templateUrl: ROUTE_INFO.LOGIN.TEMPLATE_URL,
    title:ROUTE_INFO.LOGIN.TITLE
  });
});