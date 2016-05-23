(function () {
  'use strict';

  angular
    .module('app')
    .controller('forumCtrl', forumCtrl);

  forumCtrl.$inject = ['$stateParams', '$state', '$mdToast', 'forumService'];

  function forumCtrl($stateParams, $state, $mdToast, forumService) {

    var fo = this;
    fo.forum = null;

    fo.topicoID = $stateParams.topicoId;

    fo.recarregar = recarregar;
    fo.salvar = salvar;
    fo.editar = editar;
    fo.excluir = excluir;
    fo.limpar = limpar;
    fo.goState = goState;


    init();


    function init() {
      getTopicos();
      getCometarios();
    }

    function goState(url, param) {
      $state.go(url, param);
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


    function salvar(event, servico) {

      servicoService.salvarServico(servico).then(success, error);

      function success(response) {
        $scope.formServico.$setPristine();
        fo.formServico = '';
        fo.selectedIndex = 0;
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
      fo.formServico = '';
      _selected = servico;
      fo.formServico = _selected;
      fo.selectedIndex = 1;
    };


    function excluir(event, servico) {

      var confirm = $mdDialog.confirm()
        .title('Excluir ' + servico.nome + ' ?')
        .ok('Sim')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        servicoService.desativarServico(servico.id).then(success, error);
      }, function () {
        console.log('cancelou');
      });

      function success(response) {
        fo.formServico = '';
        getServicos();
        fo.selectedIndex = 0;

        $mdToast.show(
          $mdToast.simple()
          .textContent('Excluido com sucesso')
          .position('top right')
          .hideDelay(3000)
        );
      }
    };


    function limpar(event) {
      fo.formServico = '';
    };



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