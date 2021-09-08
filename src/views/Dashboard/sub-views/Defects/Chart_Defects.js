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

  let LineChart_Defects1 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
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
            label: "Defects",
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
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [12, 11, 6, 7, 10, 13, 12, 5, 6, 7, 5,6, 4, 4, 5, 8, 10, 9, 12, 12, 10, 12, 8, 9, 10, 12],
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
            label: "Defects",
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
            data: [150, 168, 200, 230, 250, 211, 267]
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
            label: "Defects",
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
            data: [1200, 1234, 1453, 1254, 1264, 1241, 1304, 1503, 1551, 1301, 1453, 1478],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_Defects2 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
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
            label: "Defects",
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
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [13, 11, 15, 11, 15, 17, 11, 15, 17, 12, 17, 15, 11, 17, 12, 11, 17, 19, 13, 17, 16, 12, 10, 18, 11, 15],
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
            label: "Defects",
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
            data: [155, 161, 214, 231, 256, 257, 215]
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
            label: "Defects",
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
            data: [1250, 1264, 1453, 1274, 1243, 1245, 1365, 1235, 1426, 1478, 1414, 1572],
          },
        ],
      };
    },
    options: LineChart_options,
  };



  let LineChart_Defects3 = {
    HourlyData: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
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
            label: "Defects",
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
            pointHoverRadius: 0,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: [16, 13, 16, 18, 11, 15, 14, 13, 12, 15, 11, 17, 18, 11, 15, 17, 13, 16, 16, 13, 13, 19, 19, 12, 14, 12],
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
            label: "Defects",
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
            data: [157, 121, 244, 211, 256, 212, 215]
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
            label: "Defects",
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
            data: [1256, 1214, 1345, 1567, 1124, 1456, 1673, 1864, 1245, 1743, 1123, 1563],
          },
        ],
      };
    },
    options: LineChart_options,
  };

  module.exports = {
    LineChart_Defects1,
    LineChart_Defects2,
    LineChart_Defects3,

  };
