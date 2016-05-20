(function() {
  'use strict';

  angular
    .module('app')
    .controller('boletosCtrl', boletosCtrl)
    .controller('boletosDialogCtrl', boletosDialogCtrl);

  boletosCtrl.$inject = ['$window', '$mdDialog', '$mdMedia'];
  boletosDialogCtrl.$inject = ['$window', 'boletoInfo', '$mdDialog'];

  function boletosCtrl($window, $mdDialog, $mdMedia) {

    var bo = this;

    bo.boletoMeses = [{
      data: '05/01/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/02/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/03/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/04/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/05/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/06/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/07/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/08/2016',
      valor: 'R$ 185,20'
    }, {
      data: '05/09/2016',
      valor: 'R$ 196,10'
    }, {
      data: '05/10/2016',
      valor: 'R$ 196,10'
    }, {
      data: '05/11/2016',
      valor: 'R$ 196,10'
    }, {
      data: '05/12/2016',
      valor: 'R$ 196,10'
    }]

    bo.geraBoleto = function(event, boleto) {

      var useFullScreen = ($mdMedia('sm') || $mdMedia('md')) && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'boletosDialogCtrl',
        controllerAs: 'boDiag',
        templateUrl: 'views/template/boleto.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: event,
        locals: {
          boletoInfo: boleto
        },
        clickOutsideToClose: true,
        fullscreen: useFullScreen
      });
    }

  }

  function boletosDialogCtrl($window, boletoInfo, $mdDialog) {
    var boDiag = this;

    var usuario = JSON.parse($window.sessionStorage.getItem('usuario'));

    boDiag.boleto = boletoInfo;
    boDiag.usuario = usuario;

    boDiag.cancel = function() {
      $mdDialog.hide();
    }
  }

})();