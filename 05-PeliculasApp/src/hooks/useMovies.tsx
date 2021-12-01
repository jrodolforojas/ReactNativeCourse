import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../types/movie.interface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([]);

    const getNowPlayingMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setMoviesNowPlaying(resp.data.results);

        setIsLoading(false);
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);


    return {
        moviesNowPlaying,
        isLoading,
    }
}
