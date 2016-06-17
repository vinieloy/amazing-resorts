(function() {
    'use strict';

    angular
        .module('loginApp')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['acessoService', '$window', '$mdToast', '$mdDialog', '$mdMedia'];

    function loginCtrl(acessoService, $window, $mdToast, $mdDialog, $mdMedia) {

        var lg = this;

        lg.entrar = function entrar() {

            var login = {};
            login.cpf = lg.cpf;
            login.senha = lg.senha;

            acessoService.login(login)
                .then(success, error);
        };

        lg.esqueciSenha = function(event) {
            var confirm = $mdDialog.prompt()
                .title('Esqueci minha senha')
                .placeholder('Email')
                .targetEvent(event)
                .ok('Enviar')
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function(email) {
                acessoService.esqueciSenha(email).then(function() {
                    console.log('Email enviado');
                }, function() {
                    console.log('Erro');
                });
            }, function() {
                console.log('Cancelado');
            });
        };

        function success(response) {
            if (response.data.id > 0) {
                $window.sessionStorage.setItem('usuario', JSON.stringify(response.data));
                $window.open('index.html', '_self');
            } else {
                error(response);
            }
        };

        function error(response) {
            $mdToast.show(
                $mdToast.simple()
                .textContent('Login ou senha inválido')
                .position('top right')
                .hideDelay(3000)
            );
            console.log('erro no login:' + response);
        };

    };

})();