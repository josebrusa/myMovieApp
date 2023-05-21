import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterfaces'



export const useMovies = () => {

    const [ isLoadig, setIsLoading ] = useState( true );
    const [ peliculasEnCine, setPeliculasEnCine ] = useState<Movie[]>([]);


    const getMovies = async () => {

        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine( resp.data.results )
        
        setIsLoading( false );
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        peliculasEnCine,
        isLoadig
    }
}

