import axios from 'axios';

export const loginUser  = async (name, password) => {
  try {
    const response = await axios.post(`http://localhost:8000/user/login`, {
      name,
      password,
    });
    console.log("API user: ", response)
    return response;
  } catch (error) {
    throw error
  }
};


