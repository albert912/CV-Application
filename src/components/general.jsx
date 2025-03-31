import React, { useState } from 'react';  // Import useState
import GeneralDisp from './generaldiv';
import '../styles/general.css';

function GeneralForm(props) {
 



  return (
    <div className='general'>
      <p>General Details</p>

      <label htmlFor="name">Full Name:</label>
      <br />
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={props.name} 
        onChange={props.handleChange} 
        maxLength={20}
      />
      <br />
      <br />

      <button type="submit" value={props.submittedName} onChange={props.handleSubmit}>Submit</button>
    </div>
  );
}

export default GeneralForm;
