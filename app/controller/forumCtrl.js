(function () {
  'use strict';

  angular
    .module('app')
    .controller('forumCtrl', forumCtrl);

  forumCtrl.$inject = ['$mdToast', 'forumService'];

  function forumCtrl($mdToast, forumService) {

    var fr = this;
    fr.forum = null;

    getAll();

    function getAll() {
      forumService.getAll()
        .then(success, error);
    };

    function success(response) {
      fr.forum = response.data;
    };

    function error(response) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Erro: ' + response)
        .position('top right')
        .hideDelay(3000)
      );
    };
  }
})();

//
//
//'use restrict'
//
//app.controller('assembleiaCtrl', function ($mdToast, $mdMedia, $mdDialog, assembleiaService, $timeout) {
//
//  var as = this;
//  var _selectedAssembleia = null;
//
//  as.assembleias = null;
//  as.condominos = null;
//
//  as.option = {
//    limite: 5,
//    paginas: 1
//  };
//
//  listarAssembleias();
//
//  function listarAssembleias() {
//    assembleiaService.getAll().then(success, error);
//
//    function success(response) {
//      as.assembleias = response.data;
//    };
//  }
//
//  function error(response) {
//    $mdToast.show(
//      $mdToast.simple()
//      .textContent('Erro: ' + response)
//      .position('top right')
//      .hideDelay(3000)
//    );
//  };
//
//  as.verParticipantes = function (event, assembleia) {
//    var telaCheia = ($mdMedia('xs'));
//    $mdDialog.show({
//      controller: 'assembleiaModalCtrl',
//      controllerAs: 'md',
//      templateUrl: 'views/template/modal.assembleia.html',
//      parent: angular.element(document.body),
//      targetEvent: event,
//      locals: {
//        data: assembleia
//      },
//      clickOutsideToClose: true,
//      fullscreen: telaCheia
//    });
//  };
//
//  as.recarregar = function () {
//    as.assembleias = null;
//    as.loading = $timeout(function () {
//      listarAssembleias();
//    }, 1000);
//  };
//
//  as.editar = function (event, assembleia) {
//    if (assembleia.idStatus === 0) {
//
//      assembleiaService.getParticipantes(assembleia.Id)
//        .then(function (response) {
//          assembleia.participantes = response.data;
//        });
//
//      _selectedAssembleia = assembleia;
//      as.formAssembleia = _selectedAssembleia;
//      as.selectedIndex = 1;
//    } else {
//      $mdToast.show(
//        $mdToast.simple()
//        .textContent('Não é possível editar evento encerrado')
//        .position('top right')
//        .hideDelay(3000)
//      );
//    }
//  };
//
//  as.excluir = function (event, assembleia) {
//
//    var confirm = $mdDialog.confirm()
//      .title('Excluir evento: "' + assembleia.titulo + '" ?')
//      .ok('Sim')
//      .cancel('Cancelar');
//
//    $mdDialog.show(confirm).then(function () {
//      console.log('apagou');
//    }, function () {
//      console.log('cancelou');
//    });
//  };
//
//  as.limpar = function (event) {
//    as.formAssembleia = null;
//    as.formAssembleia.$setPristine();
//    as.formAssembleia.$setUntouched()
//  };
//
//  as.getGondominos = function (event) {
//    // usuarioService.getAll()
//    //     .then(function(response) {
//    //         as.condominos = response.data;
//    //     }, error);
//  };
//});
//
//app.controller('forumCtrl', function assembleiaModalCtrl($mdToast, forumService) {
//
//  var fr = this;
//  fr.forum = null;
//
//  getAll();
//
//  function getAll() {
//    forumService.getAll()
//      .then(success, error);
//  };
//
//  function success(response) {
//    fr.forum = response.data;
//  };
//
//  function error(response) {
//    $mdToast.show(
//      $mdToast.simple()
//      .textContent('Erro: ' + response)
//      .position('top right')
//      .hideDelay(3000)
//    );
//  };
//});