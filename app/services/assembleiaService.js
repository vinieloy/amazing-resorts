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
    vm.excluirAssembleia = excluirAssembleia;    
    vm.getAllAta = getAllAta;
    vm.salvarAta = salvarAta;
    vm.excluirAta = excluirAta;
    vm.getAllAtaParticipante = getAllAtaParticipante;
    vm.salvarAtaParticipante = salvarAtaParticipante;
    vm.excluirAtaParticipante = excluirAtaParticipante;


    // assembleia
    function getAll() {
      return $http.get(Api.Assembleia)
        .success(success)
        .error(error);
    }

    function salvarAssembleia(assembleia) {
      return $http.post(Api.CriarAssembleia, JSON.stringify(assembleia))
        .success(success)
        .error(error);
    }

    function excluirAssembleia(id) {
      return $http.post(Api.ExcluirAssembleia, id)
        .success(success)
        .error(error);
    }

    // ata
    function getAllAta() {
      return $http.get(Api.Ata)
        .success(success)
        .error(error);
    }

    function salvarAta(ata) {
      return $http.post(Api.CriarAta, JSON.stringify(ata))
        .success(success)
        .error(error);
    }

    function excluirAta(id) {
      return $http.post(Api.ExcluirAta, id)
        .success(success)
        .error(error);
    }

    // ata participantes
    function getAllAtaParticipante() {
      return $http.get(Api.AtaParticipante)
        .success(success)
        .error(error);
    }

    function salvarAtaParticipante(ataParticipantes) {
      return $http.post(Api.CriarAtaParticipante, JSON.stringify(ataParticipantes))
        .success(success)
        .error(error);
    }

    function excluirAtaParticipante(id) {
      return $http.post(Api.ExcluirAtaParticipante, id)
        .success(success)
        .error(error);
    }


    function getParticipantes(assembleiaId) {
      return $http.get(Api.AtaParticipantes, {
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