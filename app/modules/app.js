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
    "url": "http://amazingresort.somee.com/api/",

    "Usuario": "http://amazingresort.somee.com/api/Usuario/",
    "ExcluirUsuario": "http://amazingresort.somee.com/api/Usuario/ExcluirPessoa/",

    "Funcionario": "http://amazingresort.somee.com/api/Funcionario/",

    "Morador": "http://amazingresort.somee.com/api/Morador/",
    "CriarMorador": "http://amazingresort.somee.com/api/Morador/CriarMorador/",

    "Imovel": "http://amazingresort.somee.com/api/Imovel/",
    "CriarImovel": "http://amazingresort.somee.com/api/Imovel/CriarImovel/",
    "ExcluirImovel": "http://amazingresort.somee.com/api/Imovel/ExcluirImovel/",

    "Veiculo": "http://amazingresort.somee.com/api/Veiculo/",
    "CriarVeiculo": "http://amazingresort.somee.com/api/Veiculo/CriarVeiculo/",
    "ExcluirVeiculo": "http://amazingresort.somee.com/api/Veiculo/ExcluirVeiculo/",

    "Servico": "http://amazingresort.somee.com/api/Servico/",
    "CriarServico": "http://amazingresort.somee.com/api/Servico/CriarServico/",
    "ExcluirServico": "http://amazingresort.somee.com/api/Servico/ExcluirServico/",

    "Assembleia": "http://amazingresort.somee.com/api/Assembleia/",
    "CriarAssembleia": "http://amazingresort.somee.com/api/Assembleia/CriarAssembleia/",
    "ExcluirAssembleia": "http://amazingresort.somee.com/api/Assembleia/ExcluirAssembleia/",

    "Ata": "http://amazingresort.somee.com/api/Ata/",
    "CriarAta": "http://amazingresort.somee.com/api/Ata/CriarAta/",
    "ExcluirAta": "http://amazingresort.somee.com/api/Ata/ExcluirAta/",

    "AtaParticipante": "http://amazingresort.somee.com/api/AtaParticipante/",
    "CriarAtaParticipante": "http://amazingresort.somee.com/api/AtaParticipante/CriarAtaParticipante/",
    "ExcluirAtaParticipante": "http://amazingresort.somee.com/api/AtaParticipante/ExcluirAtaParticipante/",

    "Topico": "http://amazingresort.somee.com/api/Topico/",
    "CriarTopico": "http://amazingresort.somee.com/api/Topico/CriarTopico/",
    "ExcluirTopico": "http://amazingresort.somee.com/api/Topico/ExcluirTopico/",

    "Comentario": "http://amazingresort.somee.com/api/Comentario/",
    "CriarComentario": "http://amazingresort.somee.com/api/Comentario/CriarComentario/",
    "ExcluirComentario": "http://amazingresort.somee.com/api/Comentario/ExcluirComentario/",

    "RelatoriosPie": "http://amazingresort.somee.com/api/Relatorio/QuantidadeMorador/",
    "RelatoriosBar": "http://amazingresort.somee.com/api/Relatorio/QuantidadeFuncionario/",

});