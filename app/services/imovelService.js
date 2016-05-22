(function () {
  'use strict';

  angular
    .module('app')
    .service('imovelService', imovelService);

  imovelService.$inject = ['$http', 'Api'];

  function imovelService($http, Api) {

    var vm = this;

    vm.getAll = getAll;
    vm.salvarImovel = salvarImovel;
    vm.desativarImovel = desativarImovel;


    function getAll() {
      return $http.get(Api.Imovel)
        .success(success)
        .error(error);
    }

    function salvarImovel(imovel) {
      return $http.post(Api.CriarImovel, JSON.stringify(imovel))
        .success(success)
        .error(error);
    }

    function desativarImovel(id) {
      return $http.post(Api.ExcluirImovel, id)
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