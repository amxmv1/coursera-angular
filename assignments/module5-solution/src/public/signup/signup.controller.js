(function () {
  'use strict';

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['UserService', 'MenuService', 'ApiPath'];
  function SignupController(UserService, MenuService, ApiPath) {
    var reg = this;
    var items;

    reg.submit = function () {
      reg.shortNameValid = false;
      reg.completed = false;

      MenuService.getItemByShortName(reg.user.favDish)
        .then(function (response) {
          console.log(response);

          if (response) {
            reg.shortNameValid = true;

            UserService.user.firstName = reg.user.firstName;
            UserService.user.lastName = reg.user.lastName;
            UserService.user.email= reg.user.email;
            UserService.user.phone = reg.user.phone;
            UserService.user.favDish = reg.user.favDish;
            UserService.user.signed = true;

            UserService.dish.name = response.name;
            UserService.dish.description = response.description;
            UserService.dish.imageUrl = ApiPath + '/images/' + response.short_name + '.jpg';

            console.log(UserService.favDish);

            reg.completed = true;
          }
        });
      console.log(reg.shortNameValid);
    };
  }

})();
