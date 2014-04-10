'use strict';


var spacedApp = angular.module('spacedApp', [
    'ngRoute',
    'ngGrid',
    'mobile-angular-ui',
    'mobile-angular-ui.touch',
    'mobile-angular-ui.scrollable'])
    .config(function($routeProvider) {
          $routeProvider.when('/newStack',
              {
                   templateUrl: 'templates/newStack.html',
                   controller:  'CreateStackController'
              });

          $routeProvider.when('/stackList',
                {
                    templateUrl: 'templates/stackList.html',
                    controller:  'StackListController'
                });
    });

