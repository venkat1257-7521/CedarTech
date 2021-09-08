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
            suggestedMax: 8,
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



  let LineChart_DefectRate1 = {
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
            label: "Defect Rate (%)",
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
            data: [2.6, 2.8, 2.9, 3, 3.4, 3.6, 3.7, 2.9, 3.0, 3.2, 3.3, 3.5, 3.7, 3.5, 3.6, 3.5, 3.4, 3.4, 3.6, 3.7, 3.4, 3.2, 3.6, 3.5, 3.4, 3.7],
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
            label: "Defect Rate (%)",
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
            data: [4.5, 3.4, 3.6, 3.4, 3.56, 3.1, 4],
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
            label: "Defect Rate (%)",
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
            data: [5, 3, 4, 5, 3, 2, 6, 4, 8, 2, 4, 6],
          },
        ],
      };
    },
    options: LineChart_options,
  };
  

  let LineChart_DefectRate2 = {
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
            label: "Defect Rate (%)",
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
            data: [1.6, 3.8, 1.9, 2.33, 3.4, 5.6, 2.7, 2.4, 1.0, 5.2, 6.3, 7.5, 8.7, 1.5, 4.6, 2.5, 3.4, 2.4, 4.1, 3.8, 3.7, 3.5, 3.6, 3.3, 3.4, 4.0],
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
            label: "Defect Rate (%)",
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
            data: [4.1, 4.4, 4.6, 4.3, 4.26, 4.4, 4.8],
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
            label: "Defect Rate (%)",
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
            data: [9, 10, 7, 8, 5, 6, 3, 4, 5, 6, 5, 3],
          },
        ],
      };
    },
    options: LineChart_options,
  };


  let LineChart_DefectRate3 = {
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
            label: "Defect Rate (%)",
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
            data: [1.7, 3.8, 2.9, 6.33, 7.4, 3.6, 6.7, 3.4, 7.0, 9.2, 2.3, 4.5, 1.7, 4.5, 7.6, 3.5, 8.4, 1.4, 8.1, 1.8, 8.7, 1.5, 7.6, 9.3, 1.4, 9.0],
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
            label: "Defect Rate (%)",
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
            data: [4.7, 5.1, 3.4, 4.6, 4.8, 6.1, 4.5],
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
            label: "Defect Rate (%)",
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
            data: [9, 11, 12, 14, 11, 6, 8, 6, 7, 8, 10, 9],
          },
        ],
      };
    },
    options: LineChart_options,
  };


module.exports = {
    LineChart_DefectRate1,
    LineChart_DefectRate2,
    LineChart_DefectRate3,
};