import './Dashboard.scss';
import React, { useState } from "react";
import classNames from "classnames";
import * as FaIcons from 'react-icons/fa'
import ProductionOutput from './sub-views/ProductionOutput/ProductionOutput';
import ProductionTime from './sub-views/ProductionTime/ProductionTime';
import Defects from './sub-views/Defects/Defects';
import DefectRate from './sub-views/DefectRate/DefectRate';
import CycleTime from './sub-views/CycleTime/CycleTime';
import InfoCardRow from './Card/InfoCardRow';
import {Button,ButtonGroup,Row} from "reactstrap";



const infoCardsData_ProductionLineAll = [
{icon: FaIcons.FaDropbox, title: 'Production Output', text: '33.3k', progress: 75},
{icon: FaIcons.FaClock, title: 'Production Time', text: '18', progress: 54},
{icon: FaIcons.FaInbox, title: 'Defects', text: '300', progress: 12},
{icon: FaIcons.FaChartLine, title: 'Defect Rate', text: '99.9%', progress: 53},
{icon: FaIcons.FaRedoAlt, title: 'Cycle Time', text: '10.5s', progress: 17},
]

function Dashboard() {
if(ProductionLineState=="All"){
  var infoCardsData = infoCardsData_ProductionLineAll;
}

  const [ProductionLineState, SetProductionLineState] = React.useState("All");

  const [LineChart_ProductionOutput_Example1, LineChart_ProductionOutput] =
    React.useState("HourlyData");
  const set_Main_LineChart_ProductionOutput = (name) => {
    LineChart_ProductionOutput(name);
  };

  const [LineChart_ProductionTime_Example1, LineChart_ProductionTime] =
    React.useState("HourlyData");
  const set_Main_LineChart_ProductionTime = (name) => {
    LineChart_ProductionTime(name);
  };

  const [LineChart_Defects_Example1, LineChart_Defects] =
    React.useState("HourlyData");
  const set_Main_LineChart_Defects = (name) => {
    LineChart_Defects(name);
  };

  const [LineChart_DefectRate_Example1, LineChart_DefectRate] =
    React.useState("HourlyData");
  const set_Main_LineChart_DefectRate = (name) => {
    LineChart_DefectRate(name);
  };

  const [LineChart_CycleTime_Example1, LineChart_CycleTime] =
  React.useState("HourlyData");
const set_Main_LineChart_CycleTime = (name) => {
  LineChart_CycleTime(name);
};



  return (
    <>
      
        <div className="Dashboard-buttons">
                  <div className="Dashboard-dropdown">
                    <dropdown>
                      <select onChange={(e) => {
                        const SelectedProductionLine = e.target.value;
                        SetProductionLineState(SelectedProductionLine);}}>
                          <option value="All">Production Line: All</option>
                          <option value= "1">Production Line: 1</option>
                          <option value= "2">Production Line: 2</option>
                      </select>
                    </dropdown>
                  </div>
                  
                  <ButtonGroup
                  className="btn-group-toggle float-right"
                  data-toggle="buttons"
                  >
                    <Button
                      tag="label"
                      className={classNames("btn-simple", {
                      active: LineChart_ProductionOutput_Example1 && LineChart_ProductionTime_Example1 && LineChart_Defects_Example1 && LineChart_DefectRate_Example1 && LineChart_CycleTime_Example1 === "HourlyData",})}
                      color="info"
                      id="0"
                      size="sm"
                      onClick={() => {set_Main_LineChart_ProductionOutput("HourlyData"); set_Main_LineChart_ProductionTime("HourlyData"); set_Main_LineChart_Defects("HourlyData"); set_Main_LineChart_DefectRate("HourlyData"); set_Main_LineChart_CycleTime("HourlyData");}}
                    >
                    <span>
                      Hourly
                    </span>
                    </Button>

                    <Button
                    color="info"
                    id="1"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                    active: LineChart_ProductionOutput_Example1 && LineChart_ProductionTime_Example1 && LineChart_Defects_Example1 && LineChart_DefectRate_Example1  && LineChart_CycleTime_Example1 === "DailyData"})}
                    onClick={() => { set_Main_LineChart_ProductionOutput("DailyData"); set_Main_LineChart_ProductionTime("DailyData"); set_Main_LineChart_Defects("DailyData"); set_Main_LineChart_DefectRate("DailyData"); set_Main_LineChart_CycleTime("DailyData");}}
                    >
                    <span>
                      Daily
                    </span>
                    </Button>

                    <Button
                    color="info"
                    id="2"
                    size="sm"
                    tag="label"
                    className={classNames("btn-simple", {
                    active: LineChart_ProductionOutput_Example1 && LineChart_ProductionTime_Example1 && LineChart_Defects_Example1 && LineChart_DefectRate_Example1  && LineChart_CycleTime_Example1 === "MonthlyData"})}
                    onClick={() => {set_Main_LineChart_ProductionOutput("MonthlyData"); set_Main_LineChart_ProductionTime("MonthlyData"); set_Main_LineChart_Defects("MonthlyData"); set_Main_LineChart_DefectRate("MonthlyData"); set_Main_LineChart_CycleTime("MonthlyData");}}
                    >
                    <span >
                    Monthly
                    </span>
                    </Button>
                  </ButtonGroup>
          </div>

      <div className="content">
        <Row className="card-view">
          <InfoCardRow  ProductionLineState={ProductionLineState} />
        </Row>
        <Row className="card-view">
          <ProductionOutput LineChart_ProductionOutput_Example1={LineChart_ProductionOutput_Example1} ProductionLineState={ProductionLineState} />
          <ProductionTime LineChart_ProductionTime_Example1={LineChart_ProductionTime_Example1} ProductionLineState={ProductionLineState} />
          <Defects LineChart_Defects_Example1={LineChart_Defects_Example1} ProductionLineState={ProductionLineState} />
          <DefectRate LineChart_DefectRate_Example1={LineChart_DefectRate_Example1} ProductionLineState={ProductionLineState} />
          <CycleTime LineChart_CycleTime_Example1={LineChart_CycleTime_Example1} ProductionLineState={ProductionLineState} />
        </Row> 
      </div>
    </>
  );
}

export default Dashboard;
