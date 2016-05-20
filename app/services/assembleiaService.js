(function () {
  'use strict';

  angular
    .module('app')
    .service('assembleiaService', assembleiaService);

  assembleiaService.$inject = ['$http', 'Api'];

  function assembleiaService($http, Api) {

    var vm = this;

    vm.getAll = getAll;
    vm.getParticipantes = getParticipantes;
    vm.salvarAssembleia = salvarAssembleia;


    function salvarAssembleia(assembleia) {
      return $http.post(Api.Assembleia, JSON.stringify(assembleia))
        .success(success)
        .error(error);
    }

    function getAll() {
      return $http.get(Api.Assembleia)
        .success(success)
        .error(error);
    }

    function getParticipantes(assembleiaId) {
      return $http.get(Api.ParticipantesAssembleia, {
          params: {
            id: assembleiaId
          }
        })
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