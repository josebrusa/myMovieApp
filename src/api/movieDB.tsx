import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '116cd0dba4ac0012d4f63117ad916de9',
        language: 'es-ES'
    }
});

export default movieDB;

