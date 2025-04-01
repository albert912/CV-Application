import React from 'react';

import '../styles/generaldiv.css';


function GeneralDisp(props) {
    return (

        <div className="generaldis">

        <h1>General Details</h1>


        <p>Full Name: {props.formData.name} </p>

        <p>Email: {props.formData.email} </p>

        <p>Phone Number: {props.formData.phone} </p>

        <p>City: {props.formData.city} </p> 
    

        </div>

    );
  }
  
  export default GeneralDisp;

