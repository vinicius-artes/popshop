import axios from 'axios';

const api = axios.create({
    baseURL:'https://raw.githubusercontent.com/vinicius-artes/upshop/main/src/api'
});

export default api;