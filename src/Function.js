import axios from 'axios';

export const getUserData = async () => {
  const idToken = localStorage.getItem('idToken');

  let body = {
    idToken: idToken,
  };

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API_KEY}`,
      body,
    );
    return response;
  } catch (e) {
    console.log('error');
  }
};
