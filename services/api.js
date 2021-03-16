import axios from 'axios';

const api = axios.create({
    baseURL: 'https://myapplts10.herokuapp.com'
});

export default api;