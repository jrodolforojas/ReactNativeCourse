import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6d9e60b0dea18b523ee7dcb3d8aefab3',
    }
});

export default movieDB;