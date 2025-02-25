import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_SERVER_URL;
{
  /*내일배움캠프에서 제공하는 인증 URL
  /register
  /login
  /user
  /profile

  위의 경로를 API_URL 뒤에 작성해서 인증 정보 유지
  */
}

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData);
  return response.data;
};
