var app = angular.module('app', ['ngMaterial', 'ui.router', 'md.data.table']);

app.config(function name($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    //.dark()
    //.primaryPalette('purple')
    //.accentPalette('orange')
    //.warnPalette('red');
  ;
});

app.constant("Api", {
  "url": "http://amazingresort.somee.com/api/",
  "Usuario": "http://amazingresort.somee.com/api/Usuario/",
  "DesativarUsuario": "http://amazingresort.somee.com/api/Usuario/DesativarPessoa/",
  "Funcionario": "http://amazingresort.somee.com/api/Funcionario/",
  "Morador": "http://amazingresort.somee.com/api/Morador/",
  "Imovel": "http://amazingresort.somee.com/api/Imovel/",
  "DesativarImovel": "http://amazingresort.somee.com/api/Imovel/DesativarImovel/",
  "Assembleia": "http://amazingresort.somee.com/api/Assembleia/",
  "DesativarAssembleia": "http://amazingresort.somee.com/api/Assembleia/DesativarAssembleia/",
  "ParticipantesAssembleia": "http://amazingresort.somee.com/api/Assembleia/GetParticipantes/",
});