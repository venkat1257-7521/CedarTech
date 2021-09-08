import React from 'react';
import { Line } from "react-chartjs-2";
import "./CycleTime.css"
import * as FaIcons from 'react-icons/fa'



import {
  LineChart_CycleTime1, 
  LineChart_CycleTime2, 
  LineChart_CycleTime3, 
} from "./Chart_CycleTime";


  
const CycleTime = ({LineChart_CycleTime_Example1, ProductionLineState}) => {
if(LineChart_CycleTime_Example1=="HourlyData" && ProductionLineState == "All"){
    var title = "Hourly";
    var SelectedProductionLine = LineChart_CycleTime1;
    var data = SelectedProductionLine[LineChart_CycleTime_Example1]
    var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="DailyData" && ProductionLineState == "All"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_CycleTime1;
  var data = SelectedProductionLine[LineChart_CycleTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="MonthlyData" && ProductionLineState == "All"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_CycleTime1;
  var data = SelectedProductionLine[LineChart_CycleTime_Example1]
  var option = SelectedProductionLine.options  
}

if(LineChart_CycleTime_Example1=="HourlyData" && ProductionLineState == "1"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_CycleTime2;
  var data = SelectedProductionLine[LineChart_CycleTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="DailyData" && ProductionLineState == "1"){
var title = "Daily";
var SelectedProductionLine = LineChart_CycleTime2;
var data = SelectedProductionLine[LineChart_CycleTime_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="MonthlyData" && ProductionLineState == "1"){
var title = "Monthly";
var SelectedProductionLine = LineChart_CycleTime2;
var data = SelectedProductionLine[LineChart_CycleTime_Example1]
var option = SelectedProductionLine.options  
}

if(LineChart_CycleTime_Example1=="HourlyData" && ProductionLineState == "2"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_CycleTime3;
  var data = SelectedProductionLine[LineChart_CycleTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="DailyData" && ProductionLineState == "2"){
var title = "Daily";
var SelectedProductionLine = LineChart_CycleTime3;
var data = SelectedProductionLine[LineChart_CycleTime_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_CycleTime_Example1=="MonthlyData" && ProductionLineState == "2"){
var title = "Monthly";
var SelectedProductionLine = LineChart_CycleTime3;
var data = SelectedProductionLine[LineChart_CycleTime_Example1]
var option = SelectedProductionLine.options  
}


    

        return (
    <>
            
            <div className='CycleTime'>

                <div className='CycleTime-header'>
                  <FaIcons.FaChartArea className='CycleTime-icon' size={20} color={'white'}/>
                  <h3 className='CycleTime-title'>{title} Cycle Time </h3>
                </div>
              
              <div className="CycleTime-body">
                  <div className="CycleTime-chart">
                    <Line
                      data={data}
                      options={option}
                    />
                  </div>
                
              </div>
            </div>
                
     </>
        )

};

export default CycleTime;