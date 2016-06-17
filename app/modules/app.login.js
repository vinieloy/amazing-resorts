var loginApp = angular.module('loginApp', ['ngMaterial', 'ngMask']);

loginApp.constant("Api", {
  "url": "http://amazingresort.somee.com/api/",
  "LoginUsuario": "http://amazingresort.somee.com/api/Usuario/Login/",
  "esqueciSenha": ""
});