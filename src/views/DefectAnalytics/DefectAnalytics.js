import './DefectAnalytics.scss';
import React, { useState } from "react";
import classNames from "classnames";
import {
    Button,
    ButtonGroup,
    Row,
    Col,
  } from "reactstrap";

import DefectChart from './subviews/DefectChart/DefectChart';
import HorizontalBarChart from './subviews/HorizontalBarChart/HorizontalbarChart';



function DefectAnalytics() {
  const [ProductionLineState, SetProductionLineState] = React.useState("All");
  const [DefectState, SetDefectState] = React.useState("All");

  const [LineChart_Defect_Example1, LineChart_Defect] = React.useState("HourlyData");
  const set_Main_LineChart_Defect = (name) => {
  LineChart_Defect(name);
};
    return(
        <>        
                <div className="DefectAnalytics-buttons">
                  <div className="DefectAnalytics-dropdown1">
                    <dropdown>
                      <select onChange={(e) => {
                        const SelectedProductionLine = e.target.value;
                        SetProductionLineState(SelectedProductionLine);

                      }}>
                        <option value="All">Production Line: All</option>
                        <option value="1">Production Line: 1</option>
                        <option value="2">Production Line: 2</option>
                        
                      </select>
                    </dropdown>
                  </div>
                  <div className="DefectAnalytics-dropdown2">
                    <dropdown>
                      <select onChange={(e) => {
                        const SelectedDefectState = e.target.value;
                        SetDefectState(SelectedDefectState);

                      }}>
                        <option value="All">Defect: All</option>
                        <option value="SSCT">Defect: Defect 1</option>
                        <option value="POGR">Defect: Defect 2</option>
                        <option value="POCK">Defect: Defect 3</option>
                        <option value="STANSTONE">Defect: Defect 4</option>
                        <option value="STANWHITE">Defect: Defect 5</option>
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
                     active:  LineChart_Defect_Example1 === "HourlyData" 
                     })}
                     color="info"
                     id="0"
                     size="sm"
                     onClick={() => {set_Main_LineChart_Defect("HourlyData");
                     }}
                     >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Hourly
                        </span>

                    </Button>       

                    <Button
                     tag="label"
                     className={classNames("btn-simple", {
                     active: LineChart_Defect_Example1 === "DailyData" 
                     })}
                     color="info"
                     id="0"
                     size="sm"
                     onClick={() => {set_Main_LineChart_Defect("DailyData");
                     }}
                     >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Daily
                        </span>

                    </Button>     


                    <Button
                     tag="label"
                     className={classNames("btn-simple", {
                     active: LineChart_Defect_Example1 === "MonthlyData" 
                     })}
                     color="info"
                     id="0"
                     size="sm"
                     onClick={() => {set_Main_LineChart_Defect("MonthlyData"); 
                     }}
                     >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Monthly
                        </span>

                    </Button>     



                </ButtonGroup>
                </div>
                <div class="content">
                <Col style={{display:"inline-block"}}>
                <Row >
                  

                
                <HorizontalBarChart DefectState={DefectState} ProductionLineState={ProductionLineState} LineChart_Defect_Example1={LineChart_Defect_Example1}/>
                </Row>
                </Col>
                                
                <Row className="card-view">
                <DefectChart DefectState={DefectState} ProductionLineState={ProductionLineState} LineChart_Defect_Example1={LineChart_Defect_Example1}/>
                </Row>
            </div>
        </>
    )

};

export default DefectAnalytics;