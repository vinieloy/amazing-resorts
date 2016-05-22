(function () {
  'use strict';

  angular
    .module('app')
    .controller('servicosCtrl', servicosCtrl);

  servicosCtrl.$inject = ['$scope', '$window', '$stateParams', 'servicoService', 'pessoaService', '$mdToast', '$mdMedia', '$mdDialog', '$timeout'];

  function servicosCtrl($scope, $window, $stateParams, servicoService, pessoaService, $mdToast, $mdMedia, $mdDialog, $timeout) {

    var se = this;
    var _selected = null;

    se.recarregar = recarregar;
    se.salvar = salvar;
    se.editar = editar;
    se.excluir = excluir;
    se.limpar = limpar;


    se.option = {
      limite: 5,
      paginas: 1
    };


    init();


    function init() {
      getServicos();
    }


    function getServicos() {
      servicoService.getAll().then(success, error);

      function success(response) {
        se.servicos = response.data;
      };
    };


    function recarregar() {
      se.servicos = [];
      se.loading = $timeout(function () {
        getServicos();
      }, 1000);
    };


    function salvar(event, servico) {

      servicoService.salvarServico(servico).then(success, error);

      function success(response) {
        $scope.formServico.$setPristine();
        se.formServico = '';
        se.selectedIndex = 0;
        getServicos();

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function editar(event, servico) {
      se.formServico = '';
      _selected = servico;
      se.formServico = _selected;
      se.selectedIndex = 1;
    };


    function excluir(event, servico) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + servico.endereco + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        servicoService.desativarServico(servico.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        se.formServico = '';
        getServicos();
        se.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function limpar(event) {
      se.formServico = '';
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