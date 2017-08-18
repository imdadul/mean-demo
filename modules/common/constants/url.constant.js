(function(){
  angular.module('common.constants')
  .constant("ROUTE_INFO",{
    DASHBOARD: {
       STATE:'layout.dashboard',
       URL:'/dashboard',
       TEMPLATE_URL: 'modules/dashboard/views/dashboard.tpl.html',
       TITLE:'Dashboard'
    },
    LOGIN: {
       STATE:'layout.login',
       URL:'/login',
       TEMPLATE_URL: 'modules/login/views/login.tpl.html',
       TITLE:'Login'
    },
    SIGNUP: {
       STATE:'layout.signup',
       URL:'/signup',
       TEMPLATE_URL: 'modules/signup/views/signup.tpl.html',
       TITLE:'Signup'
    },
    LAYOUT: {
       STATE:'layout',
       abstract: true,
       TEMPLATE_URL: 'modules/layout/views/layout.tpl.html'
    },

  })
})();
