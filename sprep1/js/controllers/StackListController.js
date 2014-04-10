'use strict';

spacedApp.controller('StackListController',
    function StackListController($scope, $log, stackDataService) {

        $scope.stackList = {
            items: [{name:"Test1"},{name:"Test2"},{name:"Test3"}]
        };




        stackDataService.getStackList().then(function(data) {
              $scope.stackList.items = data;

          });
    }
);