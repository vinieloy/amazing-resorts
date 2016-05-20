(function () {
  'use strict';

  angular
    .module('app')
    .controller('menuCtrl', menuCtrl);

  menuCtrl.$inject = ['$window', '$location', '$state', '$mdSidenav'];

  function menuCtrl($window, $location, $state, $mdSidenav) {

    var menu = this;

    menu.usuario = JSON.parse($window.sessionStorage.getItem('usuario'));
    menu.url = $location.url().split('/')[1];
    //console.log(menu.usuario);

    menu.links = [{
      url: 'forum',
      icon: 'question_answer',
      subMenu: [],
      combo: false,
      nome: 'Fórum'
    }, {
      url: 'assembleia',
      icon: 'supervisor_account',
      subMenu: [],
      combo: false,
      nome: 'Assembléia'
    }, {
      url: 'boletos',
      icon: 'monetization_on',
      subMenu: [],
      combo: false,
      nome: 'Boletos'
    }, {
      url: 'relatorios',
      icon: 'trending_up',
      subMenu: [],
      combo: false,
      nome: 'Relatórios'
    }, {
      url: 'imovel',
      icon: 'location_city',
      subMenu: [],
      combo: false,
      nome: 'Imóvel'
    }, {
      url: 'morador({tipo: "morador"})',
      icon: 'person',
      subMenu: [],
      combo: false,
      nome: 'Morador'
    }, {
      url: 'veiculos',
      icon: 'time_to_leave',
      subMenu: [],
      combo: false,
      nome: 'Veículos'
    }, {
      url: 'funcionario({tipo: "funcionario"})',
      icon: 'build',
      subMenu: [],
      combo: false,
      nome: 'Funcionário'
    }, {
      url: 'servicos',
      icon: 'format_paint',
      subMenu: [],
      combo: false,
      nome: 'Serviços'
    }]

    menu.logout = function () {
      $window.sessionStorage.clear();
      $window.open("login.html", "_self");
    }

    menu.abrir = function () {
      $mdSidenav('left').toggle();
    }
  }
})();