$(function () {
  $('#chart_container').highcharts({
    series: [{
      name: 'Número de Alertas de Documentação',
      data: [0, 0, 100]
    }, {
      name: 'Interpretação do Número de Alertas de Documentação',
      data: [3.916, 13.971, 82.112]
    }],
    chart: {
      type: 'column'
    },
    title: {
      text: 'Número de Alertas de Documentação - Sprint 1'
    },
    yAxis: [{
      max: 100,
      min: 0,
      title: {
        text: ''
      },
      plotLines: [{
        color: '#00FF00',
        width: 2,
        value: 65
      }, {
        color: '#FF0000',
        width: 2,
        value: 40
      }]
    }],
    xAxis: {
      categories: ['Baixo', 'Médio', 'Alto']
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          inside: true
        }
      }
    }
  });
});