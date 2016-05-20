(function() {
  'use strict';

  angular
    .module('loginApp')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['acessoService', '$window', '$mdToast'];

  function loginCtrl(acessoService, $window, $mdToast) {

    var lg = this;

    lg.entrar = function entrar() {

      var login = {};
      login.cpf = lg.cpf;
      login.senha = lg.senha;

      acessoService.login(login)
        .then(success, error);
    };

    function success(response) {
      if (response.data.id > 0) {
        $window.sessionStorage.setItem('usuario', JSON.stringify(response.data));
        $window.open('index.html', '_self');
      } else {
        error(response);
      }
    };

    function error(response) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Login ou senha inválido')
        .position('top right')
        .hideDelay(3000)
      );
      console.log('erro no login:' + response);
    };
  }
})();