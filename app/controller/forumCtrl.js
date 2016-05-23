(function () {
  'use strict';

  angular
    .module('app')
    .controller('forumCtrl', forumCtrl);

  forumCtrl.$inject = ['$window', '$stateParams', '$state', '$mdToast', 'forumService'];

  function forumCtrl($window, $stateParams, $state, $mdToast, forumService) {

    var fo = this;
    var _selected = null;

    fo.forum = null;

    fo.topicoID = $stateParams.topicoId;
    fo.usuario = JSON.parse($window.sessionStorage.getItem('usuario'));
    fo.formTopico.pessoa.id = usuario.id;
    fo.isCadastroTopico = false;

    fo.recarregar = recarregar;
    fo.salvarTopico = salvarTopico;
    fo.editarTopico = editarTopico;
    fo.excluirTopico = excluirTopico;
    fo.limparTopico = limparTopico;
    fo.goState = goState;
    fo.ativarCadastroTopico = ativarCadastroTopico;


    init();


    function init() {
      getTopicos();
      getCometarios();
    }

    function goState(url, param) {
      $state.go(url, param);
    }

    function ativarCadastroTopico() {
      fo.isCadastroTopico = !fo.isCadastroTopico;
    }


    function getTopicos() {
      forumService.getAll().then(success, error);

      function success(response) {
        fo.topicos = response.data;

      };
    };


    function recarregar() {
      fo.servicos = [];
      fo.loading = $timeout(function () {
        getServicos();
      }, 1000);
    };


    function salvarTopico(event, topico) {

      forumService.salvarTopico(topico).then(success, error);

      function success(response) {
        $scope.formTopico.$setPristine();
        fo.formTopico = '';
        getTopicos();

        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function editarTopico(event, topico) {
      fo.formTopico = '';
      _selected = topico;
      fo.formTopico = _selected;
    };


    function excluirTopico(event, topico) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + topico.nome + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        forumService.desativarServico(topico.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        fo.formTopico = '';
        getTopicos();

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function limparTopico(event) {
      fo.formTopico = '';
    };


    // cometarios
    function getCometarios() {
      forumService.getAllComentarios().then(success, error);

      function success(comentatiosCompleto) {
        listarComentarioPorTopico(comentatiosCompleto);
        // fo.cometarios = response.data;
      };
    };

    function listarComentarioPorTopico(comentatiosCompleto) {

      var comentarioPorTopico = [];

      if(fo.topicoID) {
        for (var i = 0; i < comentatiosCompleto.data.length; i++) {
          if (comentatiosCompleto.data[i].topico.id == fo.topicoID) {
            comentarioPorTopico.push(comentatiosCompleto.data[i]);
          }
        }

        fo.listaComentarios = comentarioPorTopico;
        fo.topicoAtual = comentarioPorTopico[0].topico.topico;
      }

    }


    function error(response) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Problemas ao conectar ao servidor: ' + responfo.data)
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
//      as.assembleias = responfo.data;
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
//          assembleia.participantes = responfo.data;
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
//    //         as.condominos = responfo.data;
//    //     }, error);
//  };
//});
//
//app.controller('forumCtrl', function assembleiaModalCtrl($mdToast, forumService) {
//
//  var fr = this;
//  fo.forum = null;
//
//  getAll();
//
//  function getAll() {
//    forumService.getAll()
//      .then(success, error);
//  };
//
//  function success(response) {
//    fo.forum = responfo.data;
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