(function () {
  'use strict';

  angular
    .module('app')
    .service('forumService', forumService);

  forumService.$inject = ['$http'];

  function forumService($http) {

    var vm = this;

    vm.getAll = getAll;


    function getAll() {
      return $http.get('../src/db/forum.json')
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