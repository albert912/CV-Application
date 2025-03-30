import React from 'react';

import '../styles/generaldiv.css';


function GeneralDisp(props) {
    return (

        <div className="generaldis">

        <h1>General Details</h1>


        <p>Name: {props.name} </p>
    

        </div>

    );
  }
  
  export default GeneralDisp;

