



import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";



export const movieUpComingUsesCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {


    try {

        const popular = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)

    } catch (error) {

        console.log(error);
        throw new Error('Error fetching movies - UpComingUseCase')

    }

}
