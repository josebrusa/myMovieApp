import { useEffect, useState } from "react";

import * as UsesCases from '../../core/use-cases/';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { Movie } from "../../core/entities/movie.entity";
import { NowPlayingResponse } from '../../infrastructure/interfaces/movie-db.responses';

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ nowPlaying, setNowPlaying ] = useState<Movie[]>([]);
    const [ popular, setPopular ] = useState<Movie[]>([]);
    const [ upComing, setUpComing ] = useState<Movie[]>([]);
    const [ topRated, setTopRated ] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad()
    }, [])

    const initialLoad = async () => {

        const nowPlayingMoviesPromises = UsesCases.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromises = UsesCases.moviePopularUsesCase(movieDBFetcher)
        const upComingPromises = UsesCases.movieUpComingUsesCase(movieDBFetcher)
        const topRatedPromises = UsesCases.movieTopRatedUsesCase(movieDBFetcher)

        const [
            nowPlayingMovies,
            popularMovies,
            upComingMovies,
            topRatedMovies
        ] = await Promise.all([
            nowPlayingMoviesPromises,
            popularPromises,
            upComingPromises,
            topRatedPromises
        ]);

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setUpComing(upComingMovies)
        setTopRated(topRatedMovies)

        setIsLoading(false)

    }

    return {
        isLoading,
        nowPlaying,
        popular,
        upComing,
        topRated,

    }
}


