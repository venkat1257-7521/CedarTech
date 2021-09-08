
import React, { useState } from "react";
import "./Defects.scss";
import classNames from "classnames";
import * as FaIcons from 'react-icons/fa'






import DefectTable from "./DefectTable";



function Defects() {
 

  return (
    <div className="defectcardrow">                
    

    <div className='defectcardrow-header'>
    <FaIcons.FaClipboardList className='defectcardrow-icon' size={20} color={'white'}/>
      <h3 className='defectcardrow-title'>Defect List</h3>
    </div>

    <div className='defectcardrow-body'>
    <DefectTable /> 
    </div>

    
    </div>
  );
}

export default Defects;
