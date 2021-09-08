import React from 'react';
import { Line } from "react-chartjs-2";
import "./DefectRate.css"
import * as FaIcons from 'react-icons/fa'


import {
  LineChart_DefectRate1, 
  LineChart_DefectRate2, 
  LineChart_DefectRate3, 
} from "./Chart_DefectRate";


  
const DefectRate = ({LineChart_DefectRate_Example1, ProductionLineState}) => {
if(LineChart_DefectRate_Example1=="HourlyData" && ProductionLineState == "All"){
    var title = "Hourly";
    var SelectedProductionLine = LineChart_DefectRate1;
    var data = SelectedProductionLine[LineChart_DefectRate_Example1]
    var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="DailyData" && ProductionLineState == "All"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_DefectRate1;
  var data = SelectedProductionLine[LineChart_DefectRate_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="MonthlyData" && ProductionLineState == "All"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_DefectRate1;
  var data = SelectedProductionLine[LineChart_DefectRate_Example1]
  var option = SelectedProductionLine.options  
}

if(LineChart_DefectRate_Example1=="HourlyData" && ProductionLineState == "1"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_DefectRate2;
  var data = SelectedProductionLine[LineChart_DefectRate_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="DailyData" && ProductionLineState == "1"){
var title = "Daily";
var SelectedProductionLine = LineChart_DefectRate2;
var data = SelectedProductionLine[LineChart_DefectRate_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="MonthlyData" && ProductionLineState == "1"){
var title = "Monthly";
var SelectedProductionLine = LineChart_DefectRate2;
var data = SelectedProductionLine[LineChart_DefectRate_Example1]
var option = SelectedProductionLine.options  
}

if(LineChart_DefectRate_Example1=="HourlyData" && ProductionLineState == "2"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_DefectRate3;
  var data = SelectedProductionLine[LineChart_DefectRate_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="DailyData" && ProductionLineState == "2"){
var title = "Daily";
var SelectedProductionLine = LineChart_DefectRate3;
var data = SelectedProductionLine[LineChart_DefectRate_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_DefectRate_Example1=="MonthlyData" && ProductionLineState == "2"){
var title = "Monthly";
var SelectedProductionLine = LineChart_DefectRate3;
var data = SelectedProductionLine[LineChart_DefectRate_Example1]
var option = SelectedProductionLine.options  
}
        return (
    <>
            
            <div className='DefectRate'>

                <div className='DefectRate-header'>
                  <FaIcons.FaChartArea className='DefectRate-icon' size={20} color={'white'}/>
                  <h3 className='DefectRate-title'>{title} Defect Rate </h3>
                </div>
              
              <div className="DefectRate-body">
                  <div className="DefectRate-chart">
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


export default DefectRate;