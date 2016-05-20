(function () {
  'use strict';

  angular
    .module('app')
    .service('usuarioService', usuarioService);

  usuarioService.$inject = ['$http'];

  function usuarioService($http) {

    var vm = this;

    vm.getAll = getAll;


    function getAll() {
      return $http.get('../src/db/usuario.json')
        .success(success)
        .error(error);
    };

    function success(response) {
      return response.data;
    }

    function error(response) {
      console.log('Error');
    }

  }
})();