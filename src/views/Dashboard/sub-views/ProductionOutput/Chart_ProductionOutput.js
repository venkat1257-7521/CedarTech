let LineChart_options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#262626",
      titleFontColor: "#ffffff",
      bodyFontColor: "#ffffff",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 0,
            padding: 20,
            fontColor: "#262626",
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255, 255, 255, 0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#262626",
          },
        },
      ],
    },
    
  };




  let LineChart_ProductionOutput1 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 0, 50, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "12 AM",
          "1 AM",
          "2 AM",
          "3 AM",
          "4 AM",
          "5 AM",
          "6 AM",
          "7 AM",
          "8 AM",
          "9 AM",
          "10 AM",
          "11 AM",
          "12 AM",
          "1 PM",
          "2 PM",
          "3 PM",
          "4 PM",
          "5 PM",
          "6 PM",
          "7 PM",
          "8 PM",
          "9 PM",
          "10 PM",
          "11 PM",
          "12 PM",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [5000, 5344, 6302, 6234, 5062, 5068, 7000, 8032, 6344, 4567, 6789, 7002, 8835, 6775, 6546, 6778, 5056, 6454, 6767, 7034, 7805, 6073, 7034, 7057, 6067, 4023],
          },
          
        ],
      };
    },
    DailyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "1/7/21",
          "2/8/21",
          "3/21",
          "4/7/21",
          "5/8/21",
          "6/21",
          "7/7/21",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [50067, 34567, 46784, 49885, 50212, 45678, 51112],
          },
        ],
      };
    },
    MonthlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [1000023, 1732422, 1222232, 1567891, 1435362, 1233425, 1256721, 1453114, 1243542, 1343433, 1244522, 1345634],
          },
        ],
      };
    },
    options: LineChart_options,
  };
  
  let LineChart_ProductionOutput2 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 0, 50, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "12 AM",
          "1 AM",
          "2 AM",
          "3 AM",
          "4 AM",
          "5 AM",
          "6 AM",
          "7 AM",
          "8 AM",
          "9 AM",
          "10 AM",
          "11 AM",
          "12 AM",
          "1 PM",
          "2 PM",
          "3 PM",
          "4 PM",
          "5 PM",
          "6 PM",
          "7 PM",
          "8 PM",
          "9 PM",
          "10 PM",
          "11 PM",
          "12 PM",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [5234, 5242, 6304, 6264, 5234, 5345, 5643, 5324, 4523, 5665, 6754, 7674, 6835, 6435, 6456, 6455, 3455, 4563, 6764, 7034, 7345, 5625, 6034, 6457, 6767, 7023],
          },
          
        ],
      };
    },
    DailyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "1/7/21",
          "2/8/21",
          "3/21",
          "4/7/21",
          "5/8/21",
          "6/21",
          "7/7/21",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [51234, 44567, 56784, 59885, 30212, 35578, 41212],
          },
        ],
      };
    },
    MonthlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [1320023, 1752422, 1522232, 1556891, 1235462, 1133425, 1456221, 1253414, 1143442, 1324433, 1344542, 1845134],
          },
        ],
      };
    },
    options: LineChart_options,
  };
  
  let LineChart_ProductionOutput3 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 0, 50, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "12 AM",
          "1 AM",
          "2 AM",
          "3 AM",
          "4 AM",
          "5 AM",
          "6 AM",
          "7 AM",
          "8 AM",
          "9 AM",
          "10 AM",
          "11 AM",
          "12 AM",
          "1 PM",
          "2 PM",
          "3 PM",
          "4 PM",
          "5 PM",
          "6 PM",
          "7 PM",
          "8 PM",
          "9 PM",
          "10 PM",
          "11 PM",
          "12 PM",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [6000, 5144, 6602, 6734, 4062, 5458, 7240, 5032, 5344, 7567, 8789, 9002, 8835, 6775, 7546, 6378, 5236, 5354, 7761, 4534, 7585, 5173, 4504, 5057, 6021, 4353],
          },
          
        ],
      };
    },
    DailyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "1/7/21",
          "2/8/21",
          "3/21",
          "4/7/21",
          "5/8/21",
          "6/21",
          "7/7/21",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [55214, 63567, 46784, 55185, 42212, 45178, 62212],
          },
        ],
      };
    },
    MonthlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0.4, "rgba(237,237,237,1)");
      gradientStroke.addColorStop(0, "rgba(237,237,237,0)"); //grey
  
      return {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: "Production Output",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#262626",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#262626",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#262626",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [1120023, 1452422, 1322232, 1256891, 1635462, 1333425, 1456221, 1352414, 1345442, 1521433, 1344542, 1745334],
          },
        ],
      };
    },
    options: LineChart_options,
  };





  module.exports = {
    LineChart_ProductionOutput1, 
    LineChart_ProductionOutput2, 
    LineChart_ProductionOutput3, 
    
  };