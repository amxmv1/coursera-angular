(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = [
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

    toBuyList.bought = function (index) {
      // console.log(toBuyList.items);
      ShoppingListCheckOffService.buyItem(toBuyList.items[index]);
      toBuyList.items.splice(index, 1);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItemList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var items = [];

    service.buyItem = function (item) {
      items.push(item);
    }

    service.getItemList = function () {
      return items;
    }
  }
})();
