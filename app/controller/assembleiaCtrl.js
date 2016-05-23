(function () {
  'use strict';

  angular
    .module('app')
    .controller('assembleiaCtrl', assembleiaCtrl);

  assembleiaCtrl.$inject = ['$mdToast', '$mdMedia', '$mdDialog', 'assembleiaService', '$timeout', '$element'];

  function assembleiaCtrl($mdToast, $mdMedia, $mdDialog, assembleiaService, $timeout, $element) {

    var assem = this;
    var _selectedAssembleia = null;
    var _selectedAta = null;

    assem.assembleias = null;
    assem.condominos = null;

    assem.option = {
      limite: 5,
      paginas: 1
    };

    assem.recarregar = recarregar;
    assem.salvarAssembleia = salvarAssembleia;
    assem.editarAssembleia = editarAssembleia;
    assem.excluirAssembleia = excluirAssembleia;
    assem.limparAssembleia = limparAssembleia;
    assem.salvarAta = salvarAta;
    assem.editarAta = editarAta;
    assem.excluirAta = excluirAta;
    assem.limparAta = limparAta;


    init();


    function init() {
      listarAssembleias();
      listarAta();
    }


    function recarregar() {
      assem.assembleias = null;
      assem.atas = null;
      assem.loading = $timeout(function () {
        listarAssembleias();
      }, 1000);
    }

    // assembleia
    function listarAssembleias() {
      assembleiaService.getAll().then(success, error);

      function success(response) {
        assem.assembleias = response.data;
      };
    }

    function salvarAssembleia(event, assembleia) {

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

    function editarAssembleia(event, assembleia) {
      assem.formAssembleia = null;
      _selectedAssembleia = assembleia;
      assem.formAssembleia = _selectedAssembleia;
      assem.selectedIndex = 1;
    }

    function excluirAssembleia(event, assembleia) {

      var confirm = $mdDialog.confirm()
        .title('Excluir evento: "' + assembleia.titulo + '" ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        assembleiaService.excluirAssembleia(assembleia.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });
    }

    function limparAssembleia(event) {
      assem.formAssembleia = '';
    }


    // ata
    function listarAta() {
      assembleiaService.getAllAta().then(success, error);

      function success(response) {
        assem.atas = response.data;
      };
    }

    function salvarAta(event, ata) {

      assembleiaService.salvarAta(ata)
        .then(success, error);

      function success(response) {
        assem.formAta = null;
        listarAta();
        assem.selectedIndex = 3;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    }

    function editarAta(event, ata) {
      assem.formAta = null;
      _selectedAta = ata;
      assem.formAta = _selectedAta;
      assem.selectedIndex = 4;
    }

    function excluirAta(event, ata) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ata: "' + ata.titulo + '" ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        assembleiaService.excluirAta(ata.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });
    }

    function limparAta(event) {
      assem.formAta = '';
    }


    function carregarAssembleia() {
      // Use timeout to simulate a 650ms request.
      return $timeout(function () {
        pessoaService.getAllMoradores().then(success, error);

        function success(response) {
          ve.pessoas = response.data;
        };
      }, 650);
    };

    // assem.getCondominos = function(event) {
    //     var service = usuarioService;
    //     service.getAll()
    //         .then(function(response) {
    //             assem.condominos = response.data;
    //         }, error);
    // };



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