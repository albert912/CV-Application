import React from 'react';

import '../styles/prac.css';


function PracticalForm() {
    return (
<div className="prac">
        <p>Practical Experience</p>

        <label for="comp">Company Name:</label>

        <br />

         <input type="text" name="prac" id="prac"/>

         <br />

         <label for="posi">Position Title:</label>

         <br />

         <input type="text" id="posi" name="posi" /> 

         <br />

         <label for="resp">Main Responsibility:</label>   

         <br />

         <input type="text" name="resp" id="resp" />

         <br />

         <label for="pstartd">Start Date:</label>   

         <br />

         <input type="date" name="pstartd" id="pstartd" />

         <br />

         <label for="pendd">End Date:</label>

         <br />

         <input type="date" name="pendd" id="pendd" />

         <br />

         <label for="desc">Description:</label>
           
           <br />

         <textarea id="message" name="message" placeholder="Enter your message" rows="4" cols="30"></textarea>

         <br />
         <br />

        <button type="submit">Submit</button>




        </div>

    );
  }
  
  export default PracticalForm;


