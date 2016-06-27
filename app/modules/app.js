var app = angular.module('app', ['ngMaterial', 'ui.router', 'md.data.table', 'chart.js', 'ngMask']);

app.config(function name($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        //.dark()
        //.primaryPalette('purple')
        //.accentPalette('orange')
        //.warnPalette('red');
    ;
});



app.constant("Api", {
    "url": "http://localhost:58773/api/",

    "Usuario": "http://localhost:58773/api/Usuario/",
    "ExcluirUsuario": "http://localhost:58773/api/Usuario/ExcluirPessoa/",

    "Funcionario": "http://localhost:58773/api/Funcionario/",

    "Morador": "http://localhost:58773/api/Morador/",
    "CriarMorador": "http://localhost:58773/api/Morador/CriarMorador/",

    "Imovel": "http://localhost:58773/api/Imovel/",
    "CriarImovel": "http://localhost:58773/api/Imovel/CriarImovel/",
    "ExcluirImovel": "http://localhost:58773/api/Imovel/ExcluirImovel/",

    "Veiculo": "http://localhost:58773/api/Veiculo/",
    "CriarVeiculo": "http://localhost:58773/api/Veiculo/CriarVeiculo/",
    "ExcluirVeiculo": "http://localhost:58773/api/Veiculo/ExcluirVeiculo/",

    "Servico": "http://localhost:58773/api/Servico/",
    "CriarServico": "http://localhost:58773/api/Servico/CriarServico/",
    "ExcluirServico": "http://localhost:58773/api/Servico/ExcluirServico/",

    "Assembleia": "http://localhost:58773/api/Assembleia/",
    "CriarAssembleia": "http://localhost:58773/api/Assembleia/CriarAssembleia/",
    "ExcluirAssembleia": "http://localhost:58773/api/Assembleia/ExcluirAssembleia/",

    "Ata": "http://localhost:58773/api/Ata/",
    "CriarAta": "http://localhost:58773/api/Ata/CriarAta/",
    "ExcluirAta": "http://localhost:58773/api/Ata/ExcluirAta/",

    "AtaParticipante": "http://localhost:58773/api/AtaParticipante/",
    "CriarAtaParticipante": "http://localhost:58773/api/AtaParticipante/CriarAtaParticipante/",
    "ExcluirAtaParticipante": "http://localhost:58773/api/AtaParticipante/ExcluirAtaParticipante/",

    "Topico": "http://localhost:58773/api/Topico/",
    "CriarTopico": "http://localhost:58773/api/Topico/CriarTopico/",
    "ExcluirTopico": "http://localhost:58773/api/Topico/ExcluirTopico/",

    "Comentario": "http://localhost:58773/api/Comentario/",
    "CriarComentario": "http://localhost:58773/api/Comentario/CriarComentario/",
    "ExcluirComentario": "http://localhost:58773/api/Comentario/ExcluirComentario/",

    "RelatoriosDoughnut" : "",
    "RelatoriosDoughnut2" : "",
    "RelatoriosPie": "http://localhost:58773/api/Relatorio/QuantidadeMorador/",
    "RelatoriosPie2": "",
    "RelatoriosBar": "http://localhost:58773/api/Relatorio/QuantidadeFuncionario/",
    "RelatoriosTabela" : ""
});
