import React from 'react';

import '../styles/pracdiv.css';


function PracticalDisp(props) {
    return (
        <div className="pracdis">
           
        <h1>Practical Experience</h1>

        <p>Company Name: {props.formData.company} </p>

<p>Position Title: {props.formData.position} </p>

<p>Main Responsibility: {props.formData.responsibility} </p>

<p>Start Date: {props.formData.start} </p> 

<p>End Date: {props.formData.end} </p> 

<p>Description: {props.formData.description} </p> 

      </div>




     

    );
  }
  
  export default PracticalDisp;

