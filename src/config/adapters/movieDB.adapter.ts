import { AxiosAdapter } from "./http/axios.adapter";



export const movieDBFetche = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a7d31e79d55f5bd64e6072eb8e2666a1',
        language: 'es'

    }
})

