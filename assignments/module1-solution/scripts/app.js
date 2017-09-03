(function () {
  'use strict'

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.listOfDishes = "";
    $scope.ifTooMuchMessage = "";
    $scope.numberOfDishes = 0;

    $scope.checkIfTooMuch = function () {
      $scope.numberOfDishes = listLength($scope.listOfDishes);

      if ($scope.numberOfDishes == 0) {
        $scope.ifTooMuchMessage = "Please enter data first"
        $scope.msgStyle = { 'color': 'red' };
        $scope.boxStyle = { 'border': '2px solid red'};

        return;
      }

      if ($scope.numberOfDishes <= 3) {
        $scope.ifTooMuchMessage = 'Enjoy!';

        $scope.msgStyle = { 'color': 'green' };
        $scope.boxStyle = { 'border': '2px solid green'};

      } else if ($scope.numberOfDishes > 3) {
        $scope.ifTooMuchMessage = "Too much!";

        $scope.msgStyle = { 'color': 'green' };
        $scope.boxStyle = { 'border': '2px solid green'};

      }
    };
  }

  function listLength(list) {
    var listLength = 0;

    if (list != "") {
      list.split(",").forEach(function(item) {
        if (item != "") {
            listLength++;
        }
      });

    }

    return listLength;
  }

})();
