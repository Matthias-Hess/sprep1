'use strict';

var spacedApp = angular.module('spacedApp', [
    'ngRoute',
    'ngGrid',
    'mobile-angular-ui',
    'mobile-angular-ui.touch',
    'mobile-angular-ui.scrollable'])
    .config(function($routeProvider) {
        $routeProvider.when('/stacks/new',
          {
               templateUrl: 'templates/newStack.html',
               controller:  'CreateStackController'
          });

        $routeProvider.when('/stacks',
            {
                templateUrl: 'templates/stackList.html',
                controller:  'StackListController'
            });

        $routeProvider.when('/stacks/:id',
            {
                templateUrl : 'templates/newStack.html',
                controller : 'CreateStackController'
            });

    });
