import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar'; 

const RegisterPage = () => {
  const history = useHistory();
  const [registered, setRegistered] = useState(false);

  const handleSave = () => {
    setRegistered(true);
    history.push('/organize-tournament');
  };

  return (
    <div>
      {registered && <Navbar />} 
      <div className="registration-container">
        <h2 className="registration-heading">Registration</h2>
        <Register onSave={handleSave} />
      </div>
    </div>
  );
};

export default RegisterPage;