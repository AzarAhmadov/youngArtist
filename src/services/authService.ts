import axios from "axios";
import { RegisterSchemaType, LoginSchemaType } from "../schema/zod-schema";

const API_BASE_URL = "https://youngartist.onrender.com/young-artist-app/api/v1";

export const loginUser = async (values: LoginSchemaType) => {
   try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, {
         ...values,
      });
      if (response.status === 200) {
         localStorage.setItem("token", response.data.token); 
       } else {
         console.error(response.data.message);
       }
       console.log("log data",response )
      return response;
   } catch (error) {
      console.error("Error during login", error);
      throw error;
   }
};

export const registerUser = async (values: RegisterSchemaType) => {
   try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, {
         ...values,
      });
      return response.data;
   } catch (error) {
      console.error("Error during registration", error);
      throw error;
   }
};

// Logout user
export const logoutUser = () => {
   localStorage.removeItem("token");
 };
 
 // Check authentication
 export const checkAuth = () => {
   return localStorage.getItem("token") !== null;
 };