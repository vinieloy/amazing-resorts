(function () {
  'use strict';

  angular
    .module('app')
    .service('servicoService', servicoService);

  servicoService.$inject = ['$http', 'Api'];

  function servicoService($http, Api) {

    var vm = this;

    vm.getAll = getAll;
    vm.salvarServico = salvarServico;
    vm.desativarServico = desativarServico;


    function getAll() {
      return $http.get(Api.Servico)
        .success(success)
        .error(error);
    }

    function salvarServico(servico) {
      return $http.post(Api.Servico, JSON.stringify(servico))
        .success(success)
        .error(error);
    }

    function desativarServico(id) {
      return $http.post(Api.DesativarServico, id)
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