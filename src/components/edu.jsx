import React, { useState } from 'react';
import EducationDisp from './edudiv';


import "../styles/edu.css";




function EducationForm(props) {

   //Hook

 const [formData, setFormData] = useState({ school: '', study: '', startdate: '', enddate:'' ,});

  //Update Function
  const handleChange = function(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value  
    });
  };

  

    return (
      <div className="edu">
        <form onSubmit={(event) => props.handleChange(event, formData)}>
        <p>Educational Experience</p>
  
        <label htmlFor="school">School Name:</label>
        <br />
        <input type="text" id="school" name="school" onChange={handleChange} />
        <br />
  
        <label htmlFor="title">Title of Study:</label>
        <br />
        <input type="text" name="study" id="study" onChange={handleChange} />
        <br />
  
        <label htmlFor="startdate">Start Date:</label>
        <br />
        <input type="date" name="startdate" id="startdate" onChange={handleChange} />
        <br />
  
        <label htmlFor="enddate">End Date:</label>
        <br />
        <input type="date" name="enddate" id="enddate" onChange={handleChange} />
        <br />
        <br />
  
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default EducationForm;