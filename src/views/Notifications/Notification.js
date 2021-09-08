
import React, { Component } from "react";
import "./Notification.scss";
import * as FaIcons from 'react-icons/fa'
import 'react-notifications-component/dist/theme.css'


import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";



function Notification() {
 
  return (
    <>
    <div className="notification">                
      <div className='notification-header'>
        <FaIcons.FaRegBell className='notification-icon' size={20} color={'white'}/>
        <h3 className='notification-title'>Alerts</h3>
      </div>

    <div className='notification-body'>
    
              <div className="card-body1">
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Subscribe to our daily newsletters.
                    <h6>Sent 3 minutes ago.</h6>
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Follow us on LinkedIn.
                    <h6>Sent 5 minutes ago.</h6>
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    Your membership is expiring.
                    <h6>Sent 9 minutes ago.</h6>
                  </span>
                </UncontrolledAlert>
              </div>
            
    </div>

    </div>
    </>
  );
}

export default Notification;
