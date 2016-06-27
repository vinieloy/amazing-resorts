(function() {
    'use strict';

    angular
        .module('app')
        .service('relatoriosService', relatoriosService);

    relatoriosService.$inject = ['$http', 'Api'];

    function relatoriosService($http, Api) {

        this.getDoughnut = getDoughnut;
        this.getDoughnut2 = getDoughnut2;
        this.getPie = getPie;
        this.getPie2 = getPie2;
        this.getBar = getBar;
        this.getTabela = getTabela;
        this.getTabela2 = getTabela2;

        function getDoughnut() {
            return $http.get(Api.RelatoriosDoughnut)
                .success(success)
                .error(error);
        }
        
        function getDoughnut2() {
            return $http.get(Api.RelatoriosDoughnut2)
                .success(success)
                .error(error);
        }

        function getPie() {
            return $http.get(Api.RelatoriosPie)
                .success(success)
                .error(error);
        }
        
        function getPie2() {
            return $http.get(Api.RelatoriosPie2)
                .success(success)
                .error(error);
        }

        function getBar() {
            return $http.get(Api.RelatoriosBar)
                .success(success)
                .error(error);
        }
        
        function getTabela() {
            return $http.get(Api.RelatoriosTabela)
                .success(success)
                .error(error);
        }

        function getTabela2() {
            return $http.get(Api.RelatoriosTabela2)
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
