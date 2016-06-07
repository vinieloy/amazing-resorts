(function() {
  'use strict';

  angular
    .module('app')
    .controller('relatoriosCtrl', relatoriosCtrl);

  relatoriosCtrl.$inject = [];

  function relatoriosCtrl() {

    var re = this;
    re.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    re.series = ['Series A', 'Series B'];

    re.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    re.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    re.data2 = [300, 500, 100];
  }

})();