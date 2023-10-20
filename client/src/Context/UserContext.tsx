import React, { createContext, useState } from 'react';
import axios, { AxiosInstance, AxiosError } from 'axios';

const UserContext: React.Context<any> = createContext({});

const axiosInstance: AxiosInstance = axios.create({
   baseURL: 'http://localhost:8080/api/',
   withCredentials: true,
});

export const UserContextProvider = ({ children }: any) => {
   const registerAPI = async (payload: any) => {
      try {
         await axiosInstance.post('user/register/', payload);
      } catch (error) {
         if (axios.isAxiosError(error)) {
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

   const getUser = async () => {
      try {
         const { data } = await axiosInstance.get('user/me/');

         return data;
      } catch (error) {
         if (axios.isAxiosError(error)) {
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

   const logout = async () => {
      try {
         await axiosInstance.get('user/logout/');
      } catch (error) {
         if (axios.isAxiosError(error)) {
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
