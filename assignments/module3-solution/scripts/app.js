(function () {
  'use strict'

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'templates/foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.found = [];
    menu.errorMessage = "";

    menu.showMenuItems = function (searchTerm) {
      if (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        menu.errorMessage = "";

        promise.then(function (response) {
          menu.found = response;
        });
      }
      else {
        menu.errorMessage = "Nothing found";
      }
    };

    menu.removeItem = function (index) {
      menu.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {
        var foundItems = [];

        console.log(response);

        for (var i = 0; i < response.data.menu_items.length; i++) {
          if (response.data.menu_items[i].description.indexOf(searchTerm.toLowerCase()) != -1)
          foundItems.push(response.data.menu_items[i]);
        }

        return foundItems;
      });
    };
  }
})();
