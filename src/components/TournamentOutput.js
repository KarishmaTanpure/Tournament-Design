import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useLocation, useHistory } from 'react-router-dom';
import '../index.css';
import WelcomeScreen from './WelcomeScreen';
import createTournament from '../services/tournamentService';

const TournamentOutput = () => {
  const location = useLocation();
  const { tournamentData } = location.state;
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [tournamentCreated, setTournamentCreated] = useState(false);
  const [tournamentId, setTournamentId] = useState(null);

  const handleBack = () => {
    history.goBack();
  };

  const handleSubmit = async () => {
    try {
      const response = await createTournament(tournamentData); 
      console.log('Response from server:', response);
      setTournamentId(response.id);
      setTournamentCreated(true);
      history.push('/welcome', { tournamentData: response });
    } catch (error) {
      console.error('Error creating tournament:', error);
      setMessage('Error creating tournament. Please try again.');
    }
  };
  

  return (
    <div>
      {!tournamentCreated ? (
        <div>
          <div className="form-group">
            <label>Date Of Tournament:</label>
            <br/>
            <TextField
              id="tournamentDate"
              type="date"
              value={tournamentData.tournamentDate}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfParticipants"># OF Participants</label>
            <br />
            <TextField
              id="numberOfParticipants"
              type="number"
              value={tournamentData.numberOfParticipants}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfBats"># OF Bats</label>
            <br />
            <TextField
              id="numberOfBats"
              type="number"
              value={tournamentData.numberOfBats}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfBalls"># OF Balls</label>
            <br />
            <TextField
              id="numberOfBalls"
              type="number"
              value={tournamentData.numberOfBalls}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="arbitratorsCoachesNeeded">Arbitrators/Coaches needed</label>
            <br />
            <TextField
              id="arbitratorsCoachesNeeded"
              type="text"
              value={tournamentData.arbitratorsCoachesNeeded}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfDays"># OF Days</label>
            <br />
            <TextField
              id="numberOfDays"
              type="number"
              value={tournamentData.numberOfDays}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <br />
            <TextField
              id="location"
              type="text"
              value={tournamentData.location}
              className="custom-textfield"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="needTrophy">Need Trophy</label>
            <br />
            <TextField
              id="needTrophy"
              type="text"
              value={tournamentData.needTrophy}
              className="custom-textfield"
              disabled
            />
          </div>
          <div>
            <button onClick={handleBack}>Back</button>
            <button className="submit-button" onClick={handleSubmit}>Submit</button> 
            {message && <div>{message}</div>}
          </div>
        </div>
      ) : (
        <WelcomeScreen tournamentData={tournamentData} tournamentId={tournamentId} />
      )}
    </div>
  );
};

export default TournamentOutput;
