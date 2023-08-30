import axios from "axios";
const API_AXIOS = axios.create({
    baseURL: /*'http://127.0.0.1:5000',*/'https://blacklist-web-service.onrender.com',
    timeout: 10000,
  });

  
  export default API_AXIOS;