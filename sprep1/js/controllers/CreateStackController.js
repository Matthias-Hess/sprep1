'use strict';

spacedApp.controller('CreateStackController',
    function StackController($scope, $log, $location, $routeParams, stackDataService)  {
        $log.info("CreateStackController")  ;

        if ($routeParams.id) {
            // edit existing
            stackDataService.readStack($routeParams.id).then(function(data) {
                $scope.stack = data;
            });
        }
        else
        {
            // create new
            $scope.stack = {
                _id: uuid.v1(),
                name:"",
                cover: "",
                desc: "",
                author: ""
            };
        }



        $scope.save = function () {
            stackDataService.saveStack($scope.stack);
            
        };
    }
);