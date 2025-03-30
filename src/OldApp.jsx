import { useState } from 'react';
import './App.css';

import EducationForm from './components/edu';
import GeneralForm from './components/general';
import PracticalForm from './components/prac';
import EducationDisp from './components/edudiv';
import GeneralDisp from './components/generaldiv';
import PracticalDisp from './components/pracdiv';

function App() {
  // Lifting the formData state to App.js
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
  });

  return (
    <div className="appcontainer">
      <header className="hdr">
        <p className="htext">cv-application</p>
      </header>

      <main className="man">
        <div className="side">
          <GeneralForm formData={formData} setFormData={setFormData} />
          <EducationForm />
          <PracticalForm />
        </div>

        <div className="display">
          <GeneralDisp formData={formData} />
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
