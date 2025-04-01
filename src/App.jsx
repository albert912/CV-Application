import { useState } from 'react';
import './App.css';

import EducationForm from './components/edu';
import GeneralForm from './components/general';
import PracticalForm from './components/prac';
import EducationDisp from './components/edudiv';
import GeneralDisp from './components/generaldiv';
import PracticalDisp from './components/pracdiv';




function App() {
  
  // const [name, setName] = useState('');

  // const handleChange = function(event) {
  //   setName(event.target.value);
  // };



  const [generalData, setGeneralData] = useState({});

  const [educationData, setEducationData] = useState({});

  const [practicalData, setPracticalData] = useState({});
  
  const handleGeneralSubmit = (event, formData) => {
    event.preventDefault();
    setGeneralData(formData);
  };
  
  const handleEducationSubmit = (event, formData) => {
    event.preventDefault();
    setEducationData(formData);
  };
  
  const handlePracticalSubmit = (event, formData) => {
    event.preventDefault();
    setPracticalData(formData);
  };
  
  
  
 
  return (
    <div className="appcontainer">
      <header className="hdr">
        <p className="htext">cv-application</p>
      </header>

      <main className="man">
        <div className="side">
          <GeneralForm  handleChange={handleGeneralSubmit} />

           <EducationForm handleChange={handleEducationSubmit} />

          <PracticalForm handleChange={handlePracticalSubmit} /> 
        </div>

        <div className="display">
          <GeneralDisp formData={generalData} />
           <EducationDisp formData={educationData} /> 
           <PracticalDisp formData={practicalData}/> 
        </div>
      </main>

      <footer className="ftr">
        <p className="sign">@albert</p>
      </footer> 
    </div>
  );
}

export default App;