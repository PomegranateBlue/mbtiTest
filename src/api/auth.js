import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";
{
  /*내일배움캠프에서 제공하는 인증 URL*/
}

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
