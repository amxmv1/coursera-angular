(function () {
  'use strict';

  angular.module('MSGApp', [])
    .controller('MSGController', MSGController);

  MSGController.$inject = ['$scope'];

  function MSGController($scope, $filter) {
      $scope.name = "John";
      $scope.stateOfBeing = "Hungry";

      $scope.sayMessage = function () {
        return "John likes to eat";
      }

      $scope.feed = function () {
        $scope.stateOfBeing = "Fed";
      }
    };
})();
