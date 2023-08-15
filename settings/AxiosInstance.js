import axios from "axios";
const API_AXIOS = axios.create({
    baseURL: 'https://blacklist-web-service.onrender.com',
    timeout: 10000,
  });

  
  export default API_AXIOS;