import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaEdit } from 'react-icons/fa';
import '../index.css';

const Register = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [receiveOTP, setReceiveOTP] = useState(false);
  const [error, setError] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    


    if (!firstName || !lastName || !email || !password || !phone || !selectedOption) {
      setError('All fields are mandatory');
      return;
    }
    setError('');
    
    history.push('/organize-tournament'); 
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit}>
      <div className="icon-container">
          <FaUser className = "blue-icon"/>
          <label className="blue-text">
            <input
              type="radio"
              name="Corporate"
              value="Corporate"
              checked={selectedOption === 'Corporate'}
              onChange={() => handleSelectOption('Corporate')}
            />
            Corporate
          </label>
          <label className="blue-text">
            <input
              type="radio"
              name="Security"
              value="Security"
              checked={selectedOption === 'Security'}
              onChange={() => handleSelectOption('Security')}
            />
            Security
          </label>
          <label className="blue-text">
            <input
              type="radio"
              name="Others"
              value="Others"
              checked={selectedOption === 'Others'}
              onChange={() => handleSelectOption('Others')}
            />
            Others
          </label>
        </div>
        <div className="input-container">
          <FaUser className = "blue-icon" />
          <input
            type="text"
            className="search-box"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaUser className = "blue-icon" />
          <input
            type="text"
            className="search-box"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaEnvelope className = "blue-icon" />
          <input
            type="email"
            className="search-box"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaEnvelope className = "blue-icon" />
          <input
            type="password"
            className="search-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaPhone className = "blue-icon" />
          <input
            type="text"
            className="search-box"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-container">
          <FaEdit className = "blue-icon" />
          <select value={selectedOption} onChange={(e) => handleSelectOption(e.target.value)}>
            <option value="" className="search-box" >Select your society</option>
          </select>
        </div>

        <div className="input-container">
          <FaEdit className="blue-icon" />
          <label className="blue-text">
            <input
              type="checkbox"
              checked={receiveOTP}
              onChange={(e) => setReceiveOTP(e.target.checked)}
            />
            Receive OTP
          </label>
        </div>
        {receiveOTP && (
        <div>
          <div className="input-container">
            <FaEdit className="blue-icon" />
            <input
              type="text"
              className="search-box"
              placeholder="OTP"
            />
          </div>
        <button type="submit" className="blue-button">Save</button>
        </div> 
        )}
         {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Register;
