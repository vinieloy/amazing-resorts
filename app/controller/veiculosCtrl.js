(function () {
  'use strict';

  angular
    .module('app')
    .controller('veiculosCtrl', veiculosCtrl);

  veiculosCtrl.$inject = ['$scope', '$window', '$stateParams', 'veiculoService', 'pessoaService', '$mdToast', '$mdMedia', '$mdDialog', '$timeout'];

  function veiculosCtrl($scope, $window, $stateParams, veiculoService, pessoaService, $mdToast, $mdMedia, $mdDialog, $timeout) {

    var ve = this;
    var _selected = null;

    ve.isEdit = false;


    ve.recarregar = recarregar;
    ve.salvar = salvar;
    ve.editar = editar;
    ve.excluir = excluir;
    ve.limpar = limpar;
    ve.carregarMoradores = carregarMoradores;


    // ve.veiculos = null;
    // ve.pessoas = null;
    ve.option = {
      limite: 5,
      paginas: 1
    };


    init();


    function init() {
      getVeiculos();
      carregarMoradores();
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
        ve.isEdit = false;
        ve.selectedIndex = 0;
        ve.formVeiculo = '';
        $scope.formVeiculo.$setPristine();
        getVeiculos();

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function editar(event, veiculo) {
      ve.isEdit = true;
      ve.formVeiculo = '';
      _selected = veiculo;
      ve.formVeiculo = _selected;
      ve.selectedIndex = 1;
      carregarPessoas();
    };


    function excluir(event, veiculo) {

      var confirm = $mdDialog.confirm()
        .title('Excluir veículo com placa: ' + veiculo.placa + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        veiculoService.desativarVeiculo(veiculo.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        ve.isEdit = false;
        ve.selectedIndex = 0;
        ve.formVeiculo = '';
        $scope.formVeiculo.$setPristine();
        getVeiculos();

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function limpar(event) {
      ve.isEdit = false;
      ve.formVeiculo = '';
      $scope.formVeiculo.$setPristine();
    };


    function carregarMoradores() {
      // Use timeout to simulate a 650ms request.
      return $timeout(function () {
        pessoaService.getAllMoradores().then(success, error);

        function success(response) {
          ve.moradores = response.data;
        };
      }, 650);
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