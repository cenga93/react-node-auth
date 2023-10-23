import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
   baseURL: process.env.REACT_APP_API,
   withCredentials: true,
});

export default Axios;
