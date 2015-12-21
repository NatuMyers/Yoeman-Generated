'use strict';

angular.module('yoGeneratedApp', [
  'yoGeneratedApp.auth',
  'yoGeneratedApp.admin',
  'yoGeneratedApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
