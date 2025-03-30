import { useState } from 'react';
import './App.css';

import EducationForm from './components/edu';
import GeneralForm from './components/general';
import PracticalForm from './components/prac';
import EducationDisp from './components/edudiv';
import GeneralDisp from './components/generaldiv';
import PracticalDisp from './components/pracdiv';




function App() {
  
  const [name, setName] = useState('');

  const handleChange = function(event) {
    setName(event.target.value);
  };



  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit =  function() {
  setSubmittedName(submittedName = name); 
}; 
  
  
 
  return (
    <div className="appcontainer">
      <header className="hdr">
        <p className="htext">cv-application</p>
      </header>

      <main className="man">
        <div className="side">
          <GeneralForm name={name} handleChange={handleChange} />

          <EducationForm />
          <PracticalForm />
        </div>

        <div className="display">
          <GeneralDisp name={name} />
          <EducationDisp />
          <PracticalDisp />
        </div>
      </main>

      <footer className="ftr">
        <p className="sign">@albert</p>
      </footer>
    </div>
  );
}

export default App;
