import React from 'react';

import "../styles/edu.css";




function EducationForm() {

  

    return (
      <div className="edu">
        <p>Educational Experience</p>
  
        <label htmlFor="school">School Name:</label>
        <br />
        <input type="text" id="school" name="school" />
        <br />
  
        <label htmlFor="title">Title of Study:</label>
        <br />
        <input type="text" name="title" id="title" />
        <br />
  
        <label htmlFor="startdate">Start Date:</label>
        <br />
        <input type="date" name="startdate" id="startdate" />
        <br />
  
        <label htmlFor="enddate">End Date:</label>
        <br />
        <input type="date" name="enddate" id="enddate" />
        <br />
        <br />
  
        <button type="submit">Submit</button>
      </div>
    );
  }
  
  export default EducationForm;