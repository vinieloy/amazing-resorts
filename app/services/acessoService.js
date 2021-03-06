(function() {
  'use strict';

  angular
    .module('loginApp')
    .service('acessoService', acessoService);

  acessoService.$inject = ['$http', 'Api'];

  function acessoService($http, Api) {

    var vm = this;

    vm.login = login;
    vm.esqueciSenha = esqueciSenha;


    function login(credenciais) {
      return $http.post(Api.LoginUsuario, JSON.stringify(credenciais))
        .success(success)
        .error(error);
    }

    function esqueciSenha(email) {
      return $http.post(Api.esqueciSenha, JSON.stringify(email))
        .success(success)
        .error(error);
    }

    function success(response) {
      return response.data;
    }

    function error(response) {
      console.log('Erro no request');
      return response;
    }

  }
})();