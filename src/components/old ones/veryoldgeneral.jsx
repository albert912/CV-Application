import React from 'react';
import GeneralDisp from './generaldiv';
import '../styles/general.css';

function GeneralForm({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  {/*const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };*/}

  return (
    <div className='general'>
      <form onSubmit={handleSubmit}>  {/* ✅ Fixed: Added onSubmit */}
        <p>General Details</p>

        <label htmlFor="name">Full Name:</label>
        <br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <br />
        <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange}></input>
        <br />

        <label htmlFor="city">City and Province:</label>
        <br />
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <GeneralDisp formData={formData} />
    </div>
  );
}

export default GeneralForm;
