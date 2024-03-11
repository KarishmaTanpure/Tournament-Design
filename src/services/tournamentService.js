import axios from 'axios';

const API_URL = '/api/create-tournament';

const createTournament = async (tournamentData) => {
  try {
    const response = await axios.post(API_URL, tournamentData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating tournament. Please try again.');
  }
};

export default createTournament;

