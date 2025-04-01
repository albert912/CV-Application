import React from 'react';

import '../styles/generaldiv.css';


function GeneralDisp(props) {
    return (

        <div className="generaldis">

        <h1>General Details</h1>


        <p>Full Name: {props.name} </p>

       {/* <p>Email: {props.formData} </p>

        <p>Phone Number: {props.formData} </p>

        <p>City: {props.formData} </p> */}
    

        </div>

    );
  }
  
  export default GeneralDisp;

