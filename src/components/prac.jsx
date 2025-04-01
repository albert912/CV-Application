import React, { useState } from 'react';
import PracticalDisp from './pracdiv';

import '../styles/prac.css';


function PracticalForm(props) {


 //Hook

 const [formData, setFormData] = useState({ company: '', position: '', responsibility: '', start:'', end:'', description:'',});

  //Update Function
  const handleChange = function(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value  
    });
  };





    return (
<div className="prac">
  <form onSubmit={(event) => props.handleChange(event, formData)}>
        <p>Practical Experience</p>

        <label htmlFor="comp">Company Name:</label>

        <br />

         <input type="text" name="company" id="company" onChange={handleChange}/>

         <br />

         <label htmlFor="posi">Position Title:</label>

         <br />

         <input type="text" id="position" name="position" onChange={handleChange}/> 

         <br />

         <label htmlFor="resp">Main Responsibility:</label>   

         <br />

         <input type="text" name="responsibility" id="responsibility" onChange={handleChange} />

         <br />

         <label htmlFor="pstartd">Start Date:</label>   

         <br />

         <input type="date" name="start" id="start" onChange={handleChange}/>

         <br />

         <label htmlFor="pendd">End Date:</label>

         <br />

         <input type="date" name="end" id="end" onChange={handleChange}/>

         <br />

         <label htmlFor="desc">Description:</label>
           
           <br />

         <textarea id="description" name="description" placeholder="Enter your message" rows="4" cols="30" onChange={handleChange}></textarea>

         <br />
         <br />

        <button type="submit">Submit</button>


        </form>

        </div>

    );
  }
  
  export default PracticalForm;


