'use strict';

angular.module('yoGeneratedApp.auth', [
  'yoGeneratedApp.constants',
  'yoGeneratedApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
