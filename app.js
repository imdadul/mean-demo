angular.module('movies', [

  /**
   * Dependencies must be injected in specific order:
   * 1) AngularJS dependencies
   * 2) Common Services, Directives, Filters and Utilities
   * 3) App Layout component (e.g. Layout or Frame)
   */

    // AngularJS dependencies
    'ui.router',
    'ngCookies',
    'mgcrea.ngStrap',
    'star-rating',
    'btford.socket-io',
    // Common/shared code
    'app.common',
    'app.layout',
    'app.dashboard',
    'app.login',
    'app.signup'
  ])
  .factory('socket', function (socketFactory,CONFIG) {
    return socketFactory({
        ioSocket: io(CONFIG.BASE_URL)
    });
  })
  .run(runBlock);

runBlock.$inject = ['$state','ROUTE_INFO','loginService'];

function runBlock($state,ROUTE_INFO,loginService) {
  if(loginService.isAuthenticated()){
       $state.go(ROUTE_INFO.DASHBOARD.STATE);
    }
    else {
       $state.go(ROUTE_INFO.LOGIN.STATE);
    }
}
