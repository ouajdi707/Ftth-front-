chartColor = "#FFFFFF";
ctx = document.getElementById('chartEmail').getContext("2d");

myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [1, 2, 3],
    datasets: [{
      label: "Emails",
      pointRadius: 0,
      pointHoverRadius: 0,
      backgroundColor: [
        '#e3e3e3',
        '#4acccd',
        '#fcc468',
        '#ef8157'
      ],
      borderWidth: 0,
      data: [342, 480, 530, 120]
    }]
  },

  options: {

    legend: {
      display: false
    },

    pieceLabel: {
      render: 'percentage',
      fontColor: ['white'],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [{

        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
          color: 'rgba(255,255,255,0.05)'
        }

      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(255,255,255,0.1)',
          zeroLineColor: "transparent"
        },
        ticks: {
          display: false,
        }
      }]
    },
  }
});

ctx = document.getElementById('chartEmail1').getContext("2d");

myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [1, 2, 3],
    datasets: [{
      label: "Emails",
      pointRadius: 0,
      pointHoverRadius: 0,
      backgroundColor: [
        '#e3e3e3',
        '#4acccd',
        '#fcc468',
        '#ef8157'
      ],
      borderWidth: 0,
      data: [342, 480, 530, 120]
    }]
  },

  options: {

    legend: {
      display: false
    },

    pieceLabel: {
      render: 'percentage',
      fontColor: ['white'],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [{

        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
          color: 'rgba(255,255,255,0.05)'
        }

      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(255,255,255,0.1)',
          zeroLineColor: "transparent"
        },
        ticks: {
          display: false,
        }
      }]
    },
  }
});

var speedCanvas = document.getElementById("speedChart");

var dataFirst = {
  data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
  fill: false,
  borderColor: '#fbc658',
  backgroundColor: 'transparent',
  pointBorderColor: '#fbc658',
  pointRadius: 4,
  pointHoverRadius: 4,
  pointBorderWidth: 8,
};

var dataSecond = {
  data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
  fill: false,
  borderColor: '#51CACF',
  backgroundColor: 'transparent',
  pointBorderColor: '#51CACF',
  pointRadius: 4,
  pointHoverRadius: 4,
  pointBorderWidth: 8
};

var speedData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: false,
    position: 'top'
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  hover: false,
  data: speedData,
  options: chartOptions
});
