import React from 'react';

const WelcomeScreen = ({ tournamentData, tournamentId }) => {
  return (
    <div>
      <h1>Congratulations!!!</h1>
      <p>We have created the new Tournament - {tournamentId} on Date {tournamentData.tournamentDate}</p>
    </div>
  );
};

export default WelcomeScreen;
