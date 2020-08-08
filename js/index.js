'use strict';

function initialize() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});

    var ctx = document.getElementById("main-chart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [4, 1, 1],
          backgroundColor: [
            '#51cda0',
            '#6d78ad',
            '#df7970',
          ]
        }]
      }
    });
}