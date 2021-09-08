import React from 'react';
import { Line } from "react-chartjs-2";
import "./ProductionOutput.css"
import * as FaIcons from 'react-icons/fa'



import {
  LineChart_ProductionOutput1, 
  LineChart_ProductionOutput2, 
  LineChart_ProductionOutput3, 
} from "./Chart_ProductionOutput";

  
const ProductionOutput = ({LineChart_ProductionOutput_Example1, ProductionLineState}) => {
if(LineChart_ProductionOutput_Example1=="HourlyData" && ProductionLineState == "All"){
    var title = "Hourly";
    var SelectedProductionLine = LineChart_ProductionOutput1;
    var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
    var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="DailyData" && ProductionLineState == "All"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_ProductionOutput1;
  var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="MonthlyData" && ProductionLineState == "All"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_ProductionOutput1;
  var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
  var option = SelectedProductionLine.options  
}

if(LineChart_ProductionOutput_Example1=="HourlyData" && ProductionLineState == "1"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_ProductionOutput2;
  var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="DailyData" && ProductionLineState == "1"){
var title = "Daily";
var SelectedProductionLine = LineChart_ProductionOutput2;
var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="MonthlyData" && ProductionLineState == "1"){
var title = "Monthly";
var SelectedProductionLine = LineChart_ProductionOutput2;
var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
var option = SelectedProductionLine.options  
}

if(LineChart_ProductionOutput_Example1=="HourlyData" && ProductionLineState == "2"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_ProductionOutput3;
  var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="DailyData" && ProductionLineState == "2"){
var title = "Daily";
var SelectedProductionLine = LineChart_ProductionOutput3;
var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
var option = SelectedProductionLine.options  
}
if(LineChart_ProductionOutput_Example1=="MonthlyData" && ProductionLineState == "2"){
var title = "Monthly";
var SelectedProductionLine = LineChart_ProductionOutput3;
var data = SelectedProductionLine[LineChart_ProductionOutput_Example1]
var option = SelectedProductionLine.options  
}



        return (
    <>
            
            <div className='ProductionOutput'>
                
                <div className='ProductionOutput-header'>
                  <FaIcons.FaChartArea className='ProductionOutput-icon' size={20} color={'white'}/>
                  <h3 className='ProductionOutput-title'>{title} Production Output</h3>
                </div>
              
              <div className="ProductionOutput-body">
                  <div className="ProductionOutput-chart">
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

export default ProductionOutput;