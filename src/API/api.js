import axios from "axios";
import { store } from "../index";

const base_url = process.env.REACT_APP_BASE_URL;

export const GETAPI = async (url) => {
    const { reducer } = store.getState();
    const token = reducer.token;

   
    
    const headers = {};
    
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await axios.get(`${base_url}${url}`, { headers });
        return response;
    } catch (error) {
        return error;
    }
};



export const POSTAPI = async (url, requestData,setError) => {

    const { reducer } = store.getState();
    const token = reducer.token;

    const headers = {};

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await axios.post(`${base_url}${url}`, requestData , { headers });
        return response
    }
    catch (error) {
        setError(error.response.data.user.email)
        return error
    }

}

export const PUTAPI = async (url, requestData) => {
    const { reducer } = store.getState();
    const token = reducer.token || sessionStorage.getItem('saved_user_token');
  
    const headers = {};
  
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  
    try {
      const response = await axios.put(`${base_url}${url}`, requestData, { headers });
      return response;
    } catch (error) {
      
      return error;
    }
  };
  