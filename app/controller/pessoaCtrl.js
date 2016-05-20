(function () {
  'use strict';

  angular
    .module('app')
    .controller('pessoaCtrl', pessoaCtrl);

  pessoaCtrl.$inject = ['$stateParams', 'pessoaService', '$mdToast', '$mdMedia', '$mdDialog', '$timeout'];

  function pessoaCtrl($stateParams, pessoaService, $mdToast, $mdMedia, $mdDialog, $timeout) {

    var ps = this;
    var _selected = null;

    ps.isFuncionario = ($stateParams.tipo === 'funcionario' ? true : false);
    ps.isMorador = ($stateParams.tipo === 'morador' ? true : false);


    ps.pessoas = null;

    ps.option = {
      limite: 5,
      paginas: 1
    };

    getPessoas();

    function getPessoas() {
      if (ps.isFuncionario) {
        listarFuncionarios();
      }

      if (ps.isMorador) {
        listarMoradores();
      }
    }

    function listarMoradores() {
      pessoaService.getAllMoradores().then(success, error);

      function success(response) {
        ps.pessoas = response.data;
      };
    };

    function listarFuncionarios() {
      pessoaService.getAllFuncionarios().then(success, error);

      function success(response) {
        ps.pessoas = response.data;
      };
    };

    ps.recarregar = function () {
      ps.pessoas = null;
      ps.loading = $timeout(function () {
        getPessoas();
      }, 1000);
    };

    ps.salvar = function (event, pessoa) {

      if (pessoa.senha !== pessoa.tempSenha) {
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.querySelector('body')))
          .clickOutsideToClose(false)
          .title('Ops...')
          .textContent('Senhas não são iguais.')
          .ariaLabel('Alert Dialog Demo')
          .ok('OK')
        );
        return;
      }

      if (ps.isFuncionario) {
        pessoaService.salvarFuncionario(pessoa).then(success, error);
      }

      if (ps.isMorador) {
        pessoaService.salvarMorador(pessoa).then(success, error);
      }

      function success(response) {
        ps.formPessoa = null;
        getPessoas();
        ps.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };

    ps.editar = function (event, pessoa) {
      ps.formPessoa = null;
      _selected = pessoa;
      ps.formPessoa = _selected;
      ps.selectedIndex = 1;

    };

    ps.excluir = function (event, pessoa) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + pessoa.nome + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        pessoaService.desativarPessoa(pessoa.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        // var indice = ps.pessoas.indexOf(pessoa);
        // ps.pessoas.splice(indice, 1);
        ps.formPessoa = null;
        getPessoas();
        ps.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };

    ps.limpar = function (event) {
      ps.formPessoa = null;
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