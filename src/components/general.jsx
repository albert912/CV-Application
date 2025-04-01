import React, { useState } from 'react';  // Import useState
import GeneralDisp from './generaldiv';
import '../styles/general.css';

function GeneralForm(props) {

//Hook
 // const [name, setName] = useState('');

  //Second Hook for multiple form inputs;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city:'', });




  //Update Function
  const handleChange = function(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value  
    });
  };
  

//event.target.value

  return (
    <div className='general'>
      <form onSubmit={(event) => props.handleChange(event, formData)}>
      <p>General Details</p>

      <label htmlFor="name">Full Name:</label>
      <br />
      <input 
        type="text" 
        id="name" 
        name="name" 
        onChange={handleChange}
        maxLength={20}
      />

   <br />

<label htmlFor="email">Email:</label>
      <br />
      <input 
        type="email" 
        id="email" 
        name="email" 
        onChange={handleChange}
        maxLength={30}
      />

     <br />

<label htmlFor="phone">Phone Number:</label>
      <br />
      <input 
        type="number" 
        id="phone" 
        name="phone" 
        onChange={handleChange}
        maxLength={15}
      />

<br />

<label htmlFor="city">City:</label>
      <br />
      <input 
        type="text" 
        id="city" 
        name="city" 
        onChange={handleChange}
        maxLength={30}
      />







      
      <br />
      <br />

      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralForm;