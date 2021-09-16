export const coinsData = {
  type: "line",
  data: {
    labels: ["1/12", "2/12", "3/12", '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12', '12/12'],
    datasets: [{
      label: "Price",
      data: [320, 280, 320, 290, 260, 380, 300, 350, 290, 300, 320],
      backgroundColor: '#213056',
      borderColor: "#39B87D",
      borderWidth: 3
    }]
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
      tooltip: {
        enabled: false,
        usePointStyle: true,
        // callbacks: {
        //   labelPointStyle: function (context) {
        //     return {
        //       pointStyle: 'triangle',
        //       rotation: 0
        //     };
        //   }
        // }
      }
    },
    // tooltip: {
    //   enabled: false
    // },
    // lineTension: 1,
    // bezierCurve: false,
    // elements: {
    //   line: {
    //     tension: 0
    //   }
    // },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          padding: 25,
          min: 0,
          max: 600,
          stepSize: 200,
          callback: function (value, index, values) {
            return '$' + value;
          },
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

export default coinsData;
