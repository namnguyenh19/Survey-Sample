/**
 * Created by NamNguyen1 on 9/9/18.
 */
angular.module('SurveySample', ['ui.sortable'])
    .controller("rankingQuestion", ["$scope", function ($scope) {
        $scope.items = [];
        $scope.rankQ = "";
        $scope.isPreview = false;
    }]);