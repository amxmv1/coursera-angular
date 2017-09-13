(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyList();

    toBuyList.buy = function (index) {
      // console.log(toBuyList.items);
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {
        name: 'cookies',
        quantity: '10'
      },
      {
        name: 'doritos',
        quantity: '5'
      },
      {
        name: 'cola',
        quantity: '2'
      },
      {
        name: 'milk',
        quantity: '4'
      },
      {
        name: 'bread',
        quantity: '4'
      }
    ];

    var boughtItems = [];

    service.buyItem = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    }

    service.getToBuyList = function () {
      return toBuyItems;
    }

    service.getBoughtList = function () {
      return boughtItems;
    }
  }
})();
