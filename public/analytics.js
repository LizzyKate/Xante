export const analyticsData = {
  type: "line",
  data: {
    labels: ["1/12", "2/12", "3/12", '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12'],
    datasets: [{
        label: "Net Value Locked",
        data: [0, 80, 150, 220, 290, 370, 350, 300, 280, 250, 370, 490, 550],

        borderColor: "#39B87D",
        borderWidth: 3
      },
      {
        label: "Gross Value Locked",
        data: [0, 150, 260, 270, 330, 450, 455, 452, 430, 440, 500, 520, 550],

        borderColor: "#FFB200",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'left',

        labels: {
          usePointStyle: true,
        },
      },
    },
    // lineTension: 1,
    bezierCurve: false,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
          min: 0,
          max: 600,
          stepSize: 200,
          //   callback: function (value, index, values) {
          //     return '$' + value;
          //   }
          gridLines: {

            display: true,
            color: '#FFFFFF'
          },

        }
      }],
      xAxes: {
        gridLines: {
          display: true,
          color: "#FFFFFF"
        },
      }
    }
  }
};

export default analyticsData;
