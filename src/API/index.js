// api/index.js
 
import axios from 'axios';
 
const BackendURL = 'http://localhost:8080'; // Update with your backend URL
 
export const getAllAccounts = async () => {
  try {
    const response = await axios.get(`${BackendURL}/api/v1/accounts/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
 
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`${BackendURL}/api/v1/customers/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
