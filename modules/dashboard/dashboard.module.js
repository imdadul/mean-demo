angular.module('dashboard.controllers',[]);
angular.module('dashboard.services',[]);
angular.module('dashboard.directives',[]);
angular.module('app.dashboard', [
  'ui.router',
  'dashboard.controllers',
  'dashboard.services',
  'dashboard.directives'
])

.config(function config($stateProvider,ROUTE_INFO) {
  $stateProvider.state(ROUTE_INFO.DASHBOARD.STATE, {
    url: ROUTE_INFO.DASHBOARD.URL,
    templateUrl: ROUTE_INFO.DASHBOARD.TEMPLATE_URL,
    title:ROUTE_INFO.DASHBOARD.TITLE
  });
});