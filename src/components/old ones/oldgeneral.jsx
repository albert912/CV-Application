import React, { useState } from 'react';  // Import useState
import GeneralDisp from './generaldiv';
import '../styles/general.css';

function GeneralForm(props) {
 



  return (
    <div className='general'>
      <form onSubmit={(event)=>props.handleChange(event, name)} >
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

      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralForm;
