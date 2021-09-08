import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './InfoCard.scss'


const InfoCard = ({icon, title, progress, text}) => {

    const Icon = icon

    return (
        <div className='infocard'>

            <Icon className='card-icon' size={30}/>

            <CircularProgressbar 
            className='progressbar1' 
            value={progress} 
            text={text}
            strokeWidth={12}
            styles={progressBarStyles} />

            <h5 className='card-title'>{title}</h5>


        </div>
    )
}


const progressBarStyles = buildStyles({
    pathColor: `rgba(0, 0, 0, 1)`,
    textColor: 'black'
})



export default InfoCard