import axios from 'axios';

const api = axios.create({
    baseURL:'https://raw.githubusercontent.com/vinicius-artes/popshop/main/api'
});

export default api;