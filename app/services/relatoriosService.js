(function() {
    'use strict';

    angular
        .module('app')
        .service('relatoriosService', relatoriosService);

    relatoriosService.$inject = ['$http', 'Api'];

    function relatoriosService($http, Api) {

        this.getPie = getPie;
        this.getBar = getBar;


        function getPie() {
            return $http.get(Api.RelatoriosPie)
                .success(success)
                .error(error);
        }

        function getBar() {
            return $http.get(Api.RelatoriosBar)
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