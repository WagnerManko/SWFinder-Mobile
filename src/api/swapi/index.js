import axios from 'axios';

const swApi = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export default swApi;