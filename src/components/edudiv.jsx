import React from 'react';

import '../styles/edudiv.css';


function EducationDisp(props) {
    return (

        <div className="edudis">
            
        <h1>Educational Experience</h1>

        <p>School Name: {props.formData.school} </p>

        <p>Title of Study: {props.formData.study} </p>

        <p>Start Date: {props.formData.startdate} </p>

        <p>End Date: {props.formData.enddate} </p> 

     </div>

    );
  }
  
  export default EducationDisp;

