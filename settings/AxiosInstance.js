import axios from "axios";
//https://blacklist-web-service.onrender.com/
const API_AXIOS = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 10000,
  });

  
  export default API_AXIOS;