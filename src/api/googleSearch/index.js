  import axios from 'axios';

const googleSearch = axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBOEVCBzmlAZDi80jK_gPqYxuKiP7BN5CY&cx=49b12604b5af92a0c&q=tatooine'
});

export default googleSearch;