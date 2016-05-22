(function () {
  'use strict';

  angular
    .module('app')
    .controller('boletosCtrl', boletosCtrl)
    .controller('boletosDialogCtrl', boletosDialogCtrl);

  boletosCtrl.$inject = ['$window', '$mdDialog', '$mdMedia'];
  boletosDialogCtrl.$inject = ['$window', 'boletoInfo', '$mdDialog'];

  function boletosCtrl($window, $mdDialog, $mdMedia) {

    var bo = this;

    bo.geraBoleto = geraBoleto;

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


    function geraBoleto(event, boleto) {

      var useFullScreen = ($mdMedia('sm') || $mdMedia('md')) && bo.customFullscreen;
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


    boDiag.imprimirBoleto = function () {
      //      var elem = angular.element(document.querySelector('#pintThis'));
      //      var domClone = elem.clone();
      //
      //      var printSection = angular.element(document.querySelector('#printSection'));
      //
      //      if (!printSection) {
      //        var printSection = document.createElement('div').id = 'printSection';
      //        printSection.id = 'printSection';
      //        document.body.append(printSection);
      //      }
      //
      //      printSection.innerHTML = "";
      //      printSection.append(domClone);
      angular.element(document.querySelector('.sideNav')).addClass('no-print');
      angular.element(document.querySelector('.main-content')).addClass('no-print');
      angular.element(document.querySelector('.toolbar-dialog')).addClass('no-print');
      angular.element(document.querySelector('.actions-dialog')).addClass('no-print');
      $window.print();
    }


    boDiag.cancel = function () {
      $mdDialog.hide();
    }
  }

})();