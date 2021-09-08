import React from 'react';
import { Line } from "react-chartjs-2";
import "./ProductionTime.css"
import * as FaIcons from 'react-icons/fa'



import {
  LineChart_ProductionTime1, 
  LineChart_ProductionTime2,  
  LineChart_ProductionTime3,  
} from "./Chart_ProductionTime";

  
const ProductionTime = ({LineChart_ProductionTime_Example1, ProductionLineState}) => {

if(LineChart_ProductionTime_Example1=="HourlyData" && ProductionLineState == "All"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_ProductionTime1;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options
}
if(LineChart_ProductionTime_Example1=="DailyData" && ProductionLineState == "All"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_ProductionTime1;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionTime_Example1=="MonthlyData" && ProductionLineState == "All"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_ProductionTime1;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}

if(LineChart_ProductionTime_Example1=="HourlyData" && ProductionLineState == "1"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_ProductionTime2;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options
}
if(LineChart_ProductionTime_Example1=="DailyData" && ProductionLineState == "1"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_ProductionTime2;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionTime_Example1=="MonthlyData" && ProductionLineState == "1"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_ProductionTime2;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}

if(LineChart_ProductionTime_Example1=="HourlyData" && ProductionLineState == "2"){
  var title = "Hourly";
  var SelectedProductionLine = LineChart_ProductionTime3;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options
}
if(LineChart_ProductionTime_Example1=="DailyData" && ProductionLineState == "2"){
  var title = "Daily";
  var SelectedProductionLine = LineChart_ProductionTime3;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}
if(LineChart_ProductionTime_Example1=="MonthlyData" && ProductionLineState == "2"){
  var title = "Monthly";
  var SelectedProductionLine = LineChart_ProductionTime3;
  var data = SelectedProductionLine[LineChart_ProductionTime_Example1]
  var option = SelectedProductionLine.options  
}
    
        return (
    <>
            
            <div className='ProductionTime'>

                <div className='ProductionTime-header'>
                  <FaIcons.FaChartArea className='ProductionTime-icon' size={20} color={'white'}/>
                  <h3 className='ProductionTime-title'>{title} Production Time </h3>
                </div>
              
              <div className="ProductionTime-body">
                  <div className="ProductionTime-chart">
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

export default ProductionTime;