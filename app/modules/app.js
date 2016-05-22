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
  "CriarImovel": "http://amazingresort.somee.com/api/Imovel/CriarImovel",
  "DesativarImovel": "http://amazingresort.somee.com/api/Imovel/DesativarImovel/",
  "Veiculo": "http://amazingresort.somee.com/api/Veiculo/",
  "CriarVeiculo": "http://amazingresort.somee.com/api/Veiculo/CriarVeiculo/",
  "DesativarVeiculo": "http://amazingresort.somee.com/api/Veiculo/DesativarVeiculo/",
  "Servico": "http://amazingresort.somee.com/api/Servico/",
  "DesativarServico": "http://amazingresort.somee.com/api/Servico/DesativarServico/",
  "Assembleia": "http://amazingresort.somee.com/api/Assembleia/",
  "DesativarAssembleia": "http://amazingresort.somee.com/api/Assembleia/DesativarAssembleia/",
  "ParticipantesAssembleia": "http://amazingresort.somee.com/api/Assembleia/GetParticipantes/",
});