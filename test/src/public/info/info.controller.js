(function () {
  'use strict'

  angular.module('public').
    controller('InfoController', InfoController);

  InfoController.$inject = ['UserService'];
  function InfoController(UserService) {
    var info = this;

    console.log(UserService.user.signed);

    if (UserService.user.signed == true) {
      info.signed = true;
      info.firstName = UserService.user.firstName;
      info.lastName = UserService.user.lastName;
      info.email = UserService.user.email;
      info.phone = UserService.user.phone;
      info.favDish = UserService.user.favDish;

      info.dishName = UserService.dish.name;
      info.dishDescription = UserService.dish.description;
      info.dishImageUrl = UserService.dish.imageUrl;
    } else {
      info.signed = false;
    }
  }

})();
