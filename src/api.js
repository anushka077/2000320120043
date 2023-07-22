import axios from 'axios';

const baseURL = 'http://20.244.56.144';

const api = axios.create({
  baseURL,
  timeout: 5000, // Set a reasonable timeout for API calls
});

export const registerCompany = async (companyData) => {
  try {
    const response = await api.post('/train/register', companyData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register company');
  }
};

export const getAllTrains = async (token) => {
  try {
    const response = await api.get('/trains', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch all trains data');
  }
};

export const getTrainById = async (trainId, token) => {
  try {
    const response = await api.get(`/trains/${trainId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch train data');
  }
};
