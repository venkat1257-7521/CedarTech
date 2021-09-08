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


  let LineChart_ProductionTime1 = {
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
            label: "Production Time (Minutes)",
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
            data: [45, 50, 31, 40, 45, 46, 45, 41, 42, 45, 46, 45, 47, 42, 47, 46, 48, 49, 43, 49, 48, 46, 49, 48, 45, 48],
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
            label: "Production Time (Hours)",
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
            data: [13, 12, 15, 12, 11, 11, 12],
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
            label: "Production Time (Hours)",
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
            data: [372, 351, 346, 342, 346, 363, 356, 367, 324, 336, 352, 314],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_ProductionTime2 = {
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
            label: "Production Time (Minutes)",
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
            data: [42, 50, 41, 41, 44, 45, 47, 54, 46, 41, 47, 41, 46, 52, 41, 41, 43, 46, 49, 39, 45, 41, 44, 43, 50, 46]
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
            label: "Production Time (Hours)",
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
            data: [11, 13, 11, 10, 14, 13, 10],
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
            label: "Production Time (Hours)",
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
            data: [371, 321, 336, 342, 312, 335, 343, 327, 344, 316, 334, 344],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_ProductionTime3 = {
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
            label: "Production Time (Minutes)",
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
            data: [41, 54, 43, 46, 47, 41, 41, 44, 56, 44, 41, 46, 41, 54, 49, 47, 45, 43, 42, 38, 50, 48, 49, 44, 45, 41]
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
            label: "Production Time (Hours)",
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
            data: [14, 12, 14, 11, 12, 15, 12],
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
            label: "Production Time (Hours)",
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
            data: [311, 351, 366, 372, 354, 345, 333, 357, 324, 342, 334, 341],
          },
        ],
      };
    },
    options: LineChart_options,
  };



  module.exports = {
    LineChart_ProductionTime1, 
    LineChart_ProductionTime2,
    LineChart_ProductionTime3,  
  };
  