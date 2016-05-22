(function () {
  'use strict';

  angular
    .module('app')
    .service('veiculoService', veiculoService);

  veiculoService.$inject = ['$http', 'Api'];

  function veiculoService($http, Api) {

    var vm = this;

    vm.getAll = getAll;
    vm.salvarVeiculo = salvarVeiculo;
    vm.desativarVeiculo = desativarVeiculo;


    function getAll() {
      return $http.get(Api.Veiculo)
        .success(success)
        .error(error);
    }

    function salvarVeiculo(veiculo) {
      return $http.post(Api.CriarVeiculo, JSON.stringify(veiculo))
        .success(success)
        .error(error);
    }

    function desativarVeiculo(id) {
      return $http.post(Api.ExcluirVeiculo, id)
        .success(success)
        .error(error);
    }

    function success(response) {
      return response;
    }

    function error(response) {
      console.log('Error');
    }

  }
})();