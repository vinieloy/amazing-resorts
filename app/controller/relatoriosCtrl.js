(function() {
    'use strict';

    angular
        .module('app')
        .controller('relatoriosCtrl', relatoriosCtrl);

    relatoriosCtrl.$inject = ['relatoriosService'];

    function relatoriosCtrl(relatoriosService) {

        var re = this;
        re.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        re.seriesBar = ['Series A', 'Series B'];

        re.dataBar = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        re.labelsPie;
        re.dataPie;
        
        re.labelsPie2;
        re.dataPie2;
        
        re.labelsDoug;
        re.dataDoug;
        
        re.labelsDoug2;
        re.dataDoug2;
        
        re.labelsBar;
        re.dataBar;

        re.loadGrafico = function(tipoRelatorio) {
            
            switch(tipoRelatorio){
            case (tipoRelatorio === 'doughnut'):
                relatoriosService.getDoughnut().then(
                    function(doughnut) {

                        var status = [];
                        var qtd = [];
                        for (var i = 0; i < doughnut.data.length; i++) {
                            status.push(doughnut.data[i].status);
                            qtd.push(doughnut.data[i].quantidade);
                        };

                        re.labelsDoug = status;
                        re.dataDoug = qtd;
                    });
                    break;
            case (tipoRelatorio === 'doughnut2'):
                relatoriosService.getDoughnut2().then(
                    function(doughnut2) {

                        var status = [];
                        var qtd = [];
                        for (var i = 0; i < doughnut2.data.length; i++) {
                            status.push(doughnut2.data[i].status);
                            qtd.push(doughnut2.data[i].quantidade);
                        };

                        re.labelsDoug2 = status;
                        re.dataDoug2 = qtd;
                    });
                    break;
            case (tipoRelatorio === 'pie'):
                relatoriosService.getPie().then(
                    function(pie) {

                        var status = [];
                        var qtd = [];
                        for (var i = 0; i < pie.data.length; i++) {
                            status.push(pie.data[i].status);
                            qtd.push(pie.data[i].quantidade);
                        };

                        re.labelsPie = status;
                        re.dataPie = qtd;
                    });
                    break;
            case (tipoRelatorio === 'pie2'):
                relatoriosService.getPie2().then(
                    function(pie) {

                        var status = [];
                        var qtd = [];
                        for (var i = 0; i < pie.data.length; i++) {
                            status.push(pie.data[i].status);
                            qtd.push(pie.data[i].quantidade);
                        };

                        re.labelsPie2 = status;
                        re.dataPie2 = qtd;
                    });
                    break;
            case (tipoRelatorio === 'bar'):
                relatoriosService.getBar().then(
                    function(bar) {

                        var status = [];
                        var qtd = [];
                        for (var i = 0; i < bar.data.length; i++) {
                            status.push(bar.data[i].status);
                            qtd.push(bar.data[i].quantidade);
                        };

                        re.labelsBar = status;
                        re.dataBar = qtd;
                    });
                    break;
            case (tipoRelatorio === 'tabela'):
                relatoriosService.getTabela().then(
                    function(tabela) {
                        // o q trará ?!
                    });
                    break;
            }
        }
    }
})();
