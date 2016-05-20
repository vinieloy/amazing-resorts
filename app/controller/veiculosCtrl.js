(function () {
  'use strict';

  angular
    .module('app')
    .controller('veiculosCtrl', veiculosCtrl);

  veiculosCtrl.$inject = ['$window', '$stateParams', 'veiculoService', '$mdToast', '$mdMedia', '$mdDialog', '$timeout'];

  function veiculosCtrl($window, $stateParams, veiculoService, $mdToast, $mdMedia, $mdDialog, $timeout) {

    var ve = this;
    var _selected = null;

    ve.recarregar = recarregar;
    ve.salvar = salvar;
    ve.editar = editar;
    ve.excluir = excluir;
    ve.limpar = limpar;


    // ve.veiculos = null;
    ve.option = {
      limite: 5,
      paginas: 1
    };


    init();


    function init() {
      getVeiculos();
    }


    function getVeiculos() {
      veiculoService.getAll().then(success, error);

      function success(response) {
        ve.veiculos = response.data;
      };
    };


    function recarregar() {
      ve.veiculos = [];
      ve.loading = $timeout(function () {
        getVeiculos();
      }, 1000);
    };


    function salvar(event, veiculo) {

      veiculoService.salvarVeiculo(veiculo).then(success, error);

      function success(response) {
        ve.formVeiculo = null;
        getVeiculos();
        ve.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function editar(event, veiculo) {
      ve.formVeiculo = '';
      _selected = veiculo;
      ve.formVeiculo = _selected;
      ve.selectedIndex = 1;
    };


    function excluir(event, veiculo) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + veiculo.endereco + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        veiculoService.desativarVeiculo(veiculo.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        ve.formVeiculo = '';
        getVeiculos();
        ve.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function limpar(event) {
      ve.formVeiculo = '';
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