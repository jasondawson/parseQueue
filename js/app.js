var app = angular.module('parseQ', ['myDirectives']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
  });