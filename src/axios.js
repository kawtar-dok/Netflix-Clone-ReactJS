import axios from 'axios';

//initialize axios
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;