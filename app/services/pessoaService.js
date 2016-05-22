(function () {
  'use strict';

  angular
    .module('app')
    .service('pessoaService', pessoaService);

  pessoaService.$inject = ['$http', 'Api'];

  function pessoaService($http, Api) {

    var vm = this;

    vm.getAllMoradores = getAllMoradores;
    vm.getAllFuncionarios = getAllFuncionarios;
    vm.salvarFuncionario = salvarFuncionario;
    vm.salvarMorador = salvarMorador;
    vm.desativarPessoa = desativarPessoa;


    function getAllMoradores() {
      return $http.get(Api.Morador)
        .success(success)
        .error(error);
    }

    function getAllFuncionarios() {
      return $http.get(Api.Funcionario)
        .success(success)
        .error(error);
    }

    function salvarFuncionario(pessoa) {
      return $http.post(Api.Funcionario, JSON.stringify(pessoa))
        .success(success)
        .error(error);
    }

    function salvarMorador(pessoa) {
      return $http.post(Api.CriarMorador, JSON.stringify(pessoa))
        .success(success)
        .error(error);
    }

    function desativarPessoa(id) {
      return $http.post(Api.ExcluirUsuario, id)
        .success(success)
        .error(error);
    }

    function success(response) {
      return response.data;
    }

    function error(response) {
      console.log('Error');
    }

  }
})();