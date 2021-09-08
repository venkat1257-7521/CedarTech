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
            suggestedMax: 10 ,
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


  let LineChart_CycleTime1 = {
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
            label: "Cycle Time(s)",
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
            data: [5.5, 6.0, 7.1, 8.2, 6.4, 5.7, 5.6, 5.4, 5.4, 5.3, 5.6, 4.3, 6.2, 5.4, 7.3, 5.4, 5.4, 5.3, 5.5, 5.4, 5.6, 5.4, 5.3, 5.4, 5.1, 5.4],
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
            label: "Cycle Time(s)",
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
            data: [7.2, 7.3, 7.5, 5.8, 6.5, 6.78, 6.7],
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
            label: "Cycle Time(s)",
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
            data: [6.3, 4.6, 7.7, 7.8, 8.8, 7.8, 6.7, 6.80, 5.9, 6.1, 6.2, 7.9],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_CycleTime2 = {
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
            label: "Cycle Time(s)",
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
            data: [6.5, 5.0, 6.1, 5.2, 8.4, 4.7,7.6, 5.4, 4.4, 7.3, 4.6, 5.3, 4.2, 7.4, 4.3, 6.4, 7.4, 3.3, 5.5, 6.4, 5.6, 5.4, 5.3, 5.4, 5.1, 5.4],
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
            label: "Cycle Time(s)",
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
            data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
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
            label: "Cycle Time(s)",
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
            data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_CycleTime3 = {
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
            label: "Cycle Time(s)",
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
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100, 88, 70, 20, 30, 50, 80, 10, 38, 78, 46, 50, 70, 60, 40],
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
            label: "Cycle Time(s)",
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
            data: [80, 120, 105, 110, 95, 105, 90],
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
            label: "Cycle Time(s)",
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
            data: [3, 3.6, 4, 5, 5.8, 7, 4.5, 3.8, 3.9, 4.2, 4.7, 4.9],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  module.exports = {
    LineChart_CycleTime1,
    LineChart_CycleTime2,
    LineChart_CycleTime3,
  };
  