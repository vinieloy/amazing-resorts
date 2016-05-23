(function () {
  'use strict';

  angular
    .module('app')
    .service('forumService', forumService);

  forumService.$inject = ['$http', 'Api'];

  function forumService($http, Api) {

    var vm = this;

    vm.getAll = getAll;
    vm.salvarTopico = salvarTopico;
    vm.excluirTopico = excluirTopico;
    vm.getAllComentarios = getAllComentarios;
    vm.salvarComentario = salvarComentario;
    vm.excluirComentario = excluirComentario;


    function getAll() {
      return $http.get(Api.Topico)
        .success(success)
        .error(error);
    }

    function salvarTopico(topico) {
      return $http.post(Api.CriarTopico, JSON.stringify(topico))
        .success(success)
        .error(error);
    }

    function excluirTopico(id) {
      return $http.post(Api.ExcluirTopico, id)
        .success(success)
        .error(error);
    }

    function getAllComentarios() {
      return $http.get(Api.Comentario)
        .success(success)
        .error(error);
    }

    function salvarComentario(comentario) {
      return $http.post(Api.CriarComentario, JSON.stringify(comentario))
        .success(success)
        .error(error);
    }

    function excluirComentario(id) {
      return $http.post(Api.ExcluirComentario, id)
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