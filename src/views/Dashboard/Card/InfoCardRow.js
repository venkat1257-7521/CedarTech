import React from 'react'
import * as FaIcons from 'react-icons/fa'
import InfoCard from './InfoCard'
import './InfoCardRow.scss'

const infoCardsData_ProductionLineAll = [
    
    {icon: FaIcons.FaDropbox, title: 'Production Output', text: '25.3k', progress: 25},
    {icon: FaIcons.FaClock, title: 'Production Time', text: '12', progress: 50},
    {icon: FaIcons.FaInbox, title: 'Defects', text: '400', progress: 10},
    {icon: FaIcons.FaChartLine, title: 'Defect Rate', text: '2.5%', progress: 2.5},
    {icon: FaIcons.FaRedoAlt, title: 'Cycle Time', text: '5.5s', progress: 20},
    ]

const infoCardsData_ProductionLine1 = [
    {icon: FaIcons.FaDropbox, title: 'Production Output', text: '13.3k', progress: 13},
    {icon: FaIcons.FaClock, title: 'Production Time', text: '12', progress: 50},
    {icon: FaIcons.FaInbox, title: 'Defects', text: '330', progress: 12},
    {icon: FaIcons.FaChartLine, title: 'Defect Rate', text: '89.9%', progress: 13},
    {icon: FaIcons.FaRedoAlt, title: 'Cycle Time', text: '9.5s', progress: 67},
    ]

const infoCardsData_ProductionLine2 = [
    {icon: FaIcons.FaDropbox, title: 'Production Output', text: '27.3k', progress: 27},
    {icon: FaIcons.FaClock, title: 'Production Time', text: '13', progress: 60},
    {icon: FaIcons.FaInbox, title: 'Defects', text: '150', progress: 22},
    {icon: FaIcons.FaChartLine, title: 'Defect Rate', text: '89.9%', progress: 63},
    {icon: FaIcons.FaRedoAlt, title: 'Cycle Time', text: '5.5s', progress: 7},
    ]



const InfoCardRow = ({ ProductionLineState }) => {
if(ProductionLineState=="All"){
    var infoCardsData = infoCardsData_ProductionLineAll;
}

if(ProductionLineState=="1"){
    var infoCardsData = infoCardsData_ProductionLine1;
}

if(ProductionLineState=="2"){
    var infoCardsData = infoCardsData_ProductionLine2;
}

    return (
        <div className='infocardrow'>

            <div className='infocardrow-header'>
                <FaIcons.FaInfoCircle className='infocardrow-icon' size={20} color={'white'}/>
                <h3 className='infocardrow-title'>Daily Report</h3>
            </div>

            <div className='infocardrow-body'>
                {
                    infoCardsData.map((infoCardData) => (
                        <InfoCard
                            icon={infoCardData.icon}
                            title={infoCardData.title}
                            text={infoCardData.text}
                            progress={infoCardData.progress}
                        />
                    ))
                }
            </div>

        </div>
    )
}


export default InfoCardRow