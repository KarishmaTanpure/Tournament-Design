import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TournamentOutput from './TournamentOutput';
import { useHistory } from 'react-router-dom';



const TournamentForm = () => {
    const history = useHistory();
  const [tournamentDate, setTournamentDate] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState('');
  const [numberOfBats, setNumberOfBats] = useState('');
  const [numberOfBalls, setNumberOfBalls] = useState('');
  const [arbitratorsCoachesNeeded, setArbitratorsCoachesNeeded] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [location, setLocation] = useState('');
  const [needTrophy, setNeedTrophy] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [tournamentData, setTournamentData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateTournamentDate = (date) => {
    const today = new Date();
    const tournamentDateObj = new Date(date);
    return tournamentDateObj >= today;
};
  
const handleTournamentDateChange = (event) => {
  const { value } = event.target;
  setTournamentDate(value);

  if (!validateTournamentDate(value)) {
      setErrorMessage('The date of the tournament should be greater than or equal to today.');
  } else {
      setErrorMessage('');
  }
};

  const handleSubmit = (event) => {
    event.preventDefault();
    

    
    if (!tournamentDate || !numberOfParticipants || !numberOfBats || !numberOfBats || !arbitratorsCoachesNeeded || !numberOfDays || !location || !needTrophy || !termsAccepted) {
      setErrorMessage('Please fill in all fields and accept the terms and conditions.');
      return;
    }

    if (!validateTournamentDate(tournamentDate)) {
      setErrorMessage('The date of the tournament should be greater than or equal to today.');
      return;
  }



    const newTournamentData = {
      tournamentDate,
      numberOfParticipants,
      numberOfBats,
      numberOfBalls,
      arbitratorsCoachesNeeded,
      numberOfDays,
      location,
      needTrophy
    };

console.log('Form submitted successfully!');
console.log('Tournament Data:', tournamentData);

setTournamentData(newTournamentData);

  
  history.push('/tournament-details',{ tournamentData: newTournamentData });

  setFormSubmitted(true);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tournamentDate">Date Of Tournament</label>
          <br />
          <TextField
            id="tournamentDate"
            type="date"
            value={tournamentDate}
            onChange={handleTournamentDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfParticipants"># OF Participants</label>
          <br />
          <TextField
            id="numberOfParticipants"
            type="number"
            value={numberOfParticipants}
            onChange={(e) => setNumberOfParticipants(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfBats"># OF Bats</label>
          <br />
          <TextField
            id="numberOfBats"
            type="number"
            value={numberOfBats}
            onChange={(e) => setNumberOfBats(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfBalls"># OF Balls</label>
          <br />
          <TextField
            id="numberOfBalls"
            type="number"
            value={numberOfBalls}
            onChange={(e) => setNumberOfBalls(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="arbitratorsCoachesNeeded">Arbitrators/Coaches needed</label>
          <br />
          <TextField
            id="arbitratorsCoachesNeeded"
            type="text"
            value={arbitratorsCoachesNeeded}
            onChange={(e) => setArbitratorsCoachesNeeded(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfDays"># OF Days</label>
          <br />
          <TextField
            id="numberOfDays"
            type="number"
            value={numberOfDays}
            onChange={(e) => setNumberOfDays(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <br />
          <TextField
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="needTrophy">Need Trophy</label>
          <br />
          <TextField
            id="needTrophy"
            type="text"
            value={needTrophy}
            onChange={(e) => setNeedTrophy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="termsAccepted">
            <input
              id="termsAccepted"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I hereby declare by accepting the terms and conditions.
          </label>
        </div>
        {/* Add error message display */}
        {formSubmitted || (errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>)}

        <button type="submit" className="save-button" >Save</button>
      </form>
      {formSubmitted && <TournamentOutput tournamentData={tournamentData} />}
    </div>
  );
};

export default TournamentForm;
