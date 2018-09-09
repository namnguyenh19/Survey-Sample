/**
 * Created by NamNguyen1 on 9/9/18.
 */
angular.module('SurveySample', ['ui.sortable'])
    .controller("questionCreation", ["$scope", function ($scope) {
        $scope.questionType = "";
        $scope.numRanking = 0;
        $scope.numMatrix = 0;
        $scope.numRow;
        $scope.numCol;
        $scope.isMatrix = false;

        $scope.rangeRow = [];
        $scope.rangeCol = [];
        $scope.arrayRanking = [];
        $scope.arrayMatrix = [];

        var numQuestion = 0;
        $scope.update = function () {
            $scope.rangeRow = $scope.populateArray($scope.rangeRow, $scope.numRow);
            $scope.rangeCol = $scope.populateArray($scope.rangeCol, $scope.numCol);

            console.log($scope.rangeCol.toString());

            if ($scope.questionType == "ranking"){
                $scope.numRanking = $scope.numRanking + 1;
                $scope.arrayRanking.push(numQuestion+1);
            }
            else {
                $scope.numMatrix = $scope.numMatrix + 1;
                $scope.arrayMatrix.push(numQuestion+1);
            }

            numQuestion += 1;
        }

        $scope.populateArray = function (array, num) {
            var array = [];
            for(i=0; i<num; i++){
                array.push(i);
            }

            return array;
        }

        $scope.checkQType = function () {
            if($scope.questionType == "matrix"){
                $scope.isMatrix = true;
            }
            else {
                $scope.isMatrix = false;
            }
        }

    }])
    .controller("rankingQuestion", ["$scope", function ($scope) {
        $scope.items = [];
        $scope.rankQ = "";
        $scope.isPreview = false;

        $scope.editRow = function () {
            $scope.isPreview = false;
            if($scope.numRow > $scope.items.length){
                $scope.items.push("");
            }
            else{
                $scope.items.pop();
            }
            $scope.rangeRow = $scope.populateArray($scope.rangeRow, $scope.numRow);
        }
    }])
    .controller("matrixTable", ["$scope", function ($scope) {
        $scope.range = [];
        $scope.statements = [];
        // $scope.range = ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"];
        // $scope.statements = ["Alli is ugly", "Crystal is beautiful", "Nam is good Nam will finish this exercise"];
        $scope.matrixQ = "";
        $scope.isPreview = false;
    }]);