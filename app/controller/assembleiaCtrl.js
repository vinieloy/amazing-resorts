(function () {
  'use strict';

  angular
    .module('app')
    .controller('assembleiaCtrl', assembleiaCtrl);

  assembleiaCtrl.$inject = ['$mdToast', '$mdMedia', '$mdDialog', 'assembleiaService', '$timeout'];

  function assembleiaCtrl($mdToast, $mdMedia, $mdDialog, assembleiaService, $timeout) {

    var assem = this;
    var _selectedAssembleia = null;

    assem.assembleias = null;
    assem.condominos = null;

    assem.option = {
      limite: 5,
      paginas: 1
    };

    listarAssembleias();

    function listarAssembleias() {
      assembleiaService.getAll().then(success, error);

      function success(response) {
        assem.assembleias = response.data;
      };
    }

    assem.recarregar = function () {
      assem.assembleias = null;
      assem.loading = $timeout(function () {
        listarAssembleias();
      }, 1000);
    }

    assem.editar = function (event, assembleia) {
      assem.assembleias = null;
      _selected = assembleia;
      assem.formAssembleia = assembleia;
      assem.selectedIndex = 1;
    }

    assem.excluir = function (event, assembleia) {

      var confirm = $mdDialog.confirm()
        .title('Excluir evento: "' + assembleia.titulo + '" ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        assembleiaService.desativarPessoa(pessoa.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });
    }

    assem.limpar = function (event) {
      assem.formAssembleia = null;
    }

    // assem.getCondominos = function(event) {
    //     var service = usuarioService;
    //     service.getAll()
    //         .then(function(response) {
    //             assem.condominos = response.data;
    //         }, error);
    // };

    assem.salvar = function (event, assembleia) {

      assembleiaService.salvarAssembleia(assembleia)
        .then(success, error);

      function success(response) {
        assem.formAssembleia = null;
        listarAssembleias();
        assem.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    }

    function error(response) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Erro: ' + response)
        .position('top right')
        .hideDelay(3000)
      );
    }
  }
})();


// app.controller('assembleiaModalCtrl', function assembleiaModalCtrl($mdDialog, data, usuarioService) {

//     var md = this;
//     md.participantes = null;

//     getParticipantes(data.id);

//     function getParticipantes(assembleiaId) {
//         usuarioService.getParticipantes(assembleiaId, {
//             params: {
//                 id: assembleiaId
//             }
//         }).then(success, error);
//     };

//     function success(response) {
//         md.participantes = response.data;
//     };

//     function error(response) {
//         $mdToast.show(
//             $mdToast.simple()
//             .textContent('Erro: ' + response)
//             .position('top right')
//             .hideDelay(3000)
//         );
//     };

//     md.fechar = function() {
//         $mdDialog.cancel();
//     };
// });