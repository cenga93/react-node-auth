import React, { createContext } from 'react';
import Axios from '../config/axios';
import { isAxiosError } from 'axios';
const UserContext: React.Context<any> = createContext({});

export const UserContextProvider = ({ children }: any) => {
   /**
    * Register
    *
    * @param payload - This should be data from register form.
    */
   const registerAPI = async (payload: any) => {
      let state = false;

      try {
         await Axios.post('user/register/', payload);
         state = true;

         return state;
      } catch (error) {
         if (isAxiosError(error)) {
            if (error.response) {
               console.error('Server error:', error.response.data);
            } else if (error.request) {
               console.error('Network error:', error.request);
            } else {
               console.error('Request error:', error.message);
            }
         }
      }

      return state;
   };

   /**
    * Get logged user from database
    */
   const getUser = async () => {
      try {
         const { data } = await Axios.get('user/me/');

         return data;
      } catch (error) {
         if (isAxiosError(error)) {
            if (error.response) {
               console.error('Server error:', error.response.data);
            } else if (error.request) {
               console.error('Network error:', error.request);
            } else {
               console.error('Request error:', error.message);
            }
         }
      }
   };

   /**
    * Logout
    */
   const logout = async () => {
      try {
         await Axios.get('user/logout/');
         localStorage.setItem('authUser', 'false');
      } catch (error) {
         if (isAxiosError(error)) {
            if (error.response) {
               console.error('Server error:', error.response.data);
            } else if (error.request) {
               console.error('Network error:', error.request);
            } else {
               console.error('Request error:', error.message);
            }
         }
      }
   };

   return <UserContext.Provider value={{ registerAPI, getUser, logout }}>{children}</UserContext.Provider>;
};

export default UserContext;
