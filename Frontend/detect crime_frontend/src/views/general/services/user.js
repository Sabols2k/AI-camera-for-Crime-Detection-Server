import axios from "axios";
 
const API_URL = 'http://localhost:3000/auth';
 
// get list of the users
export const getUserListService = async () => {
  try {
    return await axios.get(`${API_URL}/users/getList`);
  } catch (err) {
    return {
      error: true,
      response: err.response
    };
  }
}