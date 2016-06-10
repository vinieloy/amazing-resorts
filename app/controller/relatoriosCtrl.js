(function() {
  'use strict';

  angular
    .module('app')
    .controller('relatoriosCtrl', relatoriosCtrl);

  relatoriosCtrl.$inject = ['relatoriosService'];

  function relatoriosCtrl(relatoriosService) {

    var re = this;
    re.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    re.series = ['Series A', 'Series B'];

    re.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    re.labels2;
    re.data2;

    re.loadGrafico = function(tipoRelatorio) {
      if (tipoRelatorio === 'pie') {
        relatoriosService.getPie().then(
          function(pie) {

            var status = [];
            var qtd = [];
            for (var i = 0; i < pie.data.length; i++) {
              status.push(pie.data[i].status);
              qtd.push(pie.data[i].quantidade);
            };

            re.labels2 = status;
            re.data2 = qtd;
          });
      } else {
        relatoriosService.getBar().then(
          function(bar) {

            var status = [];
            var qtd = [];
            for (var i = 0; i < bar.data.length; i++) {
              status.push(bar.data[i].status);
              qtd.push(bar.data[i].quantidade);
            };

            // re.labels = status;
            //re.data = qtd;
          });
      }
    }
  }
})();