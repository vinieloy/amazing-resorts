app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'defaultView': {
          templateUrl: 'views/home.html',
          controller: 'mainCtrl',
          controllerAs: 'mn'
        }
      }
    }).state('forum', {
      url: '/forum',
      views: {
        'defaultView': {
          templateUrl: 'views/forum.html',
          controller: 'forumCtrl',
          controllerAs: 'fo'
        }
      }
    }).state('assembleia', {
      url: '/assembleia',
      views: {
        'defaultView': {
          templateUrl: 'views/assembleia.html',
          controller: 'assembleiaCtrl',
          controllerAs: 'assem'
        }
      }
    }).state('boletos', {
      url: '/boletos',
      views: {
        'defaultView': {
          templateUrl: 'views/boletos.html',
          controller: 'boletosCtrl',
          controllerAs: 'bo'
        }
      }
    }).state('relatorios', {
      url: '/relatorios',
      views: {
        'defaultView': {
          templateUrl: 'views/relatorios.html',
          controller: 'relatoriosCtrl',
          controllerAs: 're'
        }
      }
    }).state('imovel', {
      url: '/imovel',
      views: {
        'defaultView': {
          templateUrl: 'views/imovel.html',
          controller: 'imovelCtrl',
          controllerAs: 'im'
        }
      }
    }).state('morador', {
      url: '/morador/:tipo',
      views: {
        'defaultView': {
          templateUrl: 'views/pessoa.html',
          controller: 'pessoaCtrl',
          controllerAs: 'ps'
        }
      }
    }).state('veiculos', {
      url: '/veiculos',
      views: {
        'defaultView': {
          templateUrl: 'views/veiculos.html',
          controller: 'veiculosCtrl',
          controllerAs: 've'
        }
      }
    }).state('funcionario', {
      url: '/funcionario/:tipo',
      views: {
        'defaultView': {
          templateUrl: 'views/pessoa.html',
          controller: 'pessoaCtrl',
          controllerAs: 'ps'
        }
      }
    }).state('servicos', {
      url: '/servicos',
      views: {
        'defaultView': {
          templateUrl: 'views/servicos.html',
          controller: 'servicosCtrl',
          controllerAs: 'se'
        }
      }
    })
});