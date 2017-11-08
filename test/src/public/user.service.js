(function () {
  'use strict';

  angular.module('public')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    service.user = {};
    service.dish = {};

    service.user.firstName = '';
    service.user.lastName = "";
    service.user.email= "";
    service.user.phone = "";
    service.user.favDish = "";
    service.user.signed = false;

    service.dish.name = "";
    service.dish.description = "";
    service.dish.imageUrl = "";
  }

})();
