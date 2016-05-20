(function () {
  'use strict';

  angular
    .module('app')
    .controller('imovelCtrl', imovelCtrl);

  imovelCtrl.$inject = ['$stateParams', 'imovelService', '$mdToast', '$mdMedia', '$mdDialog', '$timeout'];

  function imovelCtrl($stateParams, imovelService, $mdToast, $mdMedia, $mdDialog, $timeout) {

    var im = this;
    var _selected = null;

    im.imoveis = null;

    im.option = {
      limite: 5,
      paginas: 1
    };

    getImoveis();

    function getImoveis() {
      imovelService.getAll().then(success, error);

      function success(response) {
        im.imoveis = response.data;
      };
    };

    im.recarregar = function () {
      im.imoveis = null;
      im.loading = $timeout(function () {
        getImoveis();
      }, 1000);
    };

    im.salvar = function (event, imovel) {

      imovelService.salvarImovel(imovel).then(success, error);

      function success(response) {
        im.formImovel = null;
        getImoveis();
        im.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };

    im.editar = function (event, imovel) {
      im.formImovel = null;
      _selected = imovel;
      im.formImovel = _selected;
      im.selectedIndex = 1;

    };

    im.excluir = function (event, imovel) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + imovel.endereco + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        imovelService.desativarImovel(imovel.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        // var indice = im.imoveis.indexOf(imovel);
        // im.imoveis.splice(indice, 1);
        im.formImovel = null;
        getImoveis();
        im.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };

    im.limpar = function (event) {
      im.formImovel = null;
    };

    function error(response) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Problemas ao conectar ao servidor: ' + response.data)
        .position('top right')
        .hideDelay(3000)
      );
    };
  }
})();