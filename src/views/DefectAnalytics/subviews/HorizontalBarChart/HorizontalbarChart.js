import React from "react";
import Chart from "react-apexcharts";
import "./HorizontalBarChart.css";
import * as FaIcons from 'react-icons/fa';
import {
  ProductionLineAll,
  ProductionLine1,
  ProductionLine2
} from "./MockData";

const HorizontalBarChart = ({ProductionLineState, DefectState, LineChart_Defect_Example1}) => {
if(ProductionLineState== "All"){
  if(DefectState == "All"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.AllDefect.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.AllDefect.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.AllDefect.MonthlyData;}
  }
  if(DefectState == "SSCT"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.SSCT.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.SSCT.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.SSCT.MonthlyData;}
  }
  if(DefectState == "POCK"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.POCK.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.POCK.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.POCK.MonthlyData;}
  }
  if(DefectState == "POGR"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.POGR.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.POGR.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.POGR.MonthlyData;}
  }
  if(DefectState == "STANSTONE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.STANSTONE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.STANSTONE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.STANSTONE.MonthlyData;}
  }
  if(DefectState == "STANWHITE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLineAll.STANWHITE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLineAll.STANWHITE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLineAll.STANWHITE.MonthlyData;}
  }
}

if(ProductionLineState== "1"){
  if(DefectState == "All"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.AllDefect.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.AllDefect.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.AllDefect.MonthlyData;}
  }
  if(DefectState == "SSCT"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.SSCT.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.SSCT.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.SSCT.MonthlyData;}
  }
  if(DefectState == "POCK"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.POCK.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.POCK.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.POCK.MonthlyData;}
  }
  if(DefectState == "POGR"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.POGR.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.POGR.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.POGR.MonthlyData;}
  }
  if(DefectState == "STANSTONE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.STANSTONE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.STANSTONE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.STANSTONE.MonthlyData;}
  }
  if(DefectState == "STANWHITE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine1.STANWHITE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine1.STANWHITE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine1.STANWHITE.MonthlyData;}
  }
}

if(ProductionLineState== "2"){
  if(DefectState == "All"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.AllDefect.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.AllDefect.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.AllDefect.MonthlyData;}
  }
  if(DefectState == "SSCT"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.SSCT.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.SSCT.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.SSCT.MonthlyData;}
  }
  if(DefectState == "POCK"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.POCK.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.POCK.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.POCK.MonthlyData;}
  }
  if(DefectState == "POGR"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.POGR.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.POGR.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.POGR.MonthlyData;}
  }
  if(DefectState == "STANSTONE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.STANSTONE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.STANSTONE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.STANSTONE.MonthlyData;}
  }
  if(DefectState == "STANWHITE"){
    if(LineChart_Defect_Example1 == "HourlyData"){var MockData =  ProductionLine2.STANWHITE.HourlyData;}
    if(LineChart_Defect_Example1 == "DailyData"){var MockData =  ProductionLine2.STANWHITE.DailyData;}
    if(LineChart_Defect_Example1 == "MonthlyData"){var MockData =  ProductionLine2.STANWHITE.MonthlyData;}
  }
}



      var state = {
        series: MockData.SeriesData,
          
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {show: false}},

          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius : 0,}},

          stroke: {
            width: 1,
            colors: ['#fff']},

          xaxis: {           
            show: false,
            categories: [""],           
            labels: {show: false},
            axisBorder: {show: false}},
          
          grid:{
            show:false,
            borderColor: "#000000",
            strokeDashArray: 0,
            xaxis: {
                lines: {show: false}},
            yaxis: {
                lines: {show: true}},
            row: {
                colors: "#000000",
                opacity: 0.0}},
          
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 40,
            offsetY: 20,
            fontSize: '15px',
            fontFamily: "Roboto",
            itemMargin: {horizontal: 10}},

          colors: [
            "#111111", "#333333", "#555555", "#777777", "#999999"]}};
    
  
    
      return (
            <div className="HorizontalBarChart" >
                <div className='HorizontalBarChart-header'>
                    <FaIcons.FaPercentage className='HorizontalBarChart-icon' size={20} color={'white'}/>
                    <h3 className='HorizontalBarChart-title'>{MockData.title} Percentage</h3>
                </div>
                
                <div className='HorizontalBarChart-body'>
                        <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        height="240"
                        width= "1050"
                        
                        />
                </div>
              </div>
      );
    }
  
  
  
  export default HorizontalBarChart;