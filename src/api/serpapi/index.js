  import axios from 'axios';

const serpApi = axios.create({
    baseURL: 'https://serpapi.com/playground?q='
});

export default serpApi;