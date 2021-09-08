import React from 'react';
import { Line } from "react-chartjs-2";
import "./DefectChart.css"
import * as FaIcons from 'react-icons/fa';
import {LineChart_Defect} from "./LineChart";

import { ProductionLineAll_AllDefect } from './ProductionLineAll /AllDefect';
import { ProductionLineAll_POCK } from './ProductionLineAll /POCK';
import { ProductionLineAll_SSCT } from './ProductionLineAll /SSCT';
import { ProductionLineAll_POGR } from './ProductionLineAll /POGR';
import { ProductionLineAll_STANWHITE } from './ProductionLineAll /STANWHITE';
import { ProductionLineAll_STANSTONE } from './ProductionLineAll /STANSTONE';

import { ProductionLine1_AllDefect } from './ProductionLine1/AllDefect';
import { ProductionLine1_POCK } from './ProductionLine1/POCK';
import { ProductionLine1_SSCT } from './ProductionLine1/SSCT';
import { ProductionLine1_POGR } from './ProductionLine1/POGR';
import { ProductionLine1_STANWHITE } from './ProductionLine1/STANWHITE';
import { ProductionLine1_STANSTONE } from './ProductionLine1/STANSTONE';

import { ProductionLine2_AllDefect } from './ProductionLine2/AllDefect';
import { ProductionLine2_POCK } from './ProductionLine2/POCK';
import { ProductionLine2_SSCT } from './ProductionLine2/SSCT';
import { ProductionLine2_POGR } from './ProductionLine2/POGR';
import { ProductionLine2_STANWHITE } from './ProductionLine2/STANWHITE';
import { ProductionLine2_STANSTONE } from './ProductionLine2/STANSTONE';



  
const DefectChart = ({ProductionLineState, DefectState, LineChart_Defect_Example1}) => {
if(ProductionLineState=="All"){
  if(DefectState == "All"){var SelectedProductionLine = ProductionLineAll_AllDefect;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "SSCT"){var SelectedProductionLine = ProductionLineAll_SSCT;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POGR"){var SelectedProductionLine = ProductionLineAll_POGR;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POCK"){var SelectedProductionLine = ProductionLineAll_POCK;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANWHITE"){var SelectedProductionLine = ProductionLineAll_STANWHITE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANSTONE"){var SelectedProductionLine = ProductionLineAll_STANSTONE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  }

if(ProductionLineState=="1"){
  if(DefectState == "All"){var SelectedProductionLine = ProductionLine1_AllDefect;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "SSCT"){var SelectedProductionLine = ProductionLine1_SSCT;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POGR"){var SelectedProductionLine = ProductionLine1_POGR;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POCK"){var SelectedProductionLine = ProductionLine1_POCK;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANWHITE"){var SelectedProductionLine = ProductionLine1_STANWHITE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANSTONE"){var SelectedProductionLine = ProductionLine1_STANSTONE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  }

if(ProductionLineState=="2"){
  if(DefectState == "All"){var SelectedProductionLine = ProductionLine2_AllDefect;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "SSCT"){var SelectedProductionLine = ProductionLine2_SSCT;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POGR"){var SelectedProductionLine = ProductionLine2_POGR;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "POCK"){var SelectedProductionLine = ProductionLine2_POCK;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANWHITE"){var SelectedProductionLine = ProductionLine2_STANWHITE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  if(DefectState == "STANSTONE"){var SelectedProductionLine = ProductionLine2_STANSTONE;var data = SelectedProductionLine[LineChart_Defect_Example1];var options = SelectedProductionLine.options}
  }

  
        return (
    <>
            
            <div className='Defect'>
                
                <div className='Defect-header'>
                  <FaIcons.FaChartArea className='Defect-icon' size={20} color={'white'}/>
                  <h3 className='Defect-title'>Defect Quantity</h3>
                </div>
              
              <div className="Defect-body">
                  <div className="Defect-chart">
                    <Line
                      data={data}
                      options={options}
                    />
                    
                  </div>
              </div>
            </div>
                
     </>
        )

};

export default DefectChart;
