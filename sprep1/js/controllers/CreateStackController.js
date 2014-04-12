'use strict';

spacedApp.controller('CreateStackController',
    function StackController($scope, $log, $location, stackDataService)  {
        $log.info("CreateStackController")  ;
        $scope.stack = {
            _id: uuid.v1(),
            name:"",
            cover: "",
            desc: "",
            author: ""
        };

        $scope.save = function () {
            stackDataService.saveStack($scope.stack);
            $location.path('/stackList');
        };
    }
);