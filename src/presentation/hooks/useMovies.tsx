import { useEffect, useState } from "react";

import * as UsesCases from '../../core/use-cases/';
import { movieDBFetche } from "../../config/adapters/movieDB.adapter";
import { Movie } from "../../core/entities/movie.entity";

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad()



    }, [])

    const initialLoad = async () => {

        const nowPlayingMovie = await UsesCases.moviesNowPlayingUseCase(movieDBFetche)
    }

    return {}
}


