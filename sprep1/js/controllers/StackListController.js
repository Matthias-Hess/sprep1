'use strict';

spacedApp.controller('StackListController',
    function StackListController($scope, $log, stackDataService) {

        $scope.stackList = {
            items: []
        };

        stackDataService.getStackList().then(function(data) {
            $scope.stackList.items = data;
        });
    }
);