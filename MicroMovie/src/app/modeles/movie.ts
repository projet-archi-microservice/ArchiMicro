import _movies from './movie.json';

export interface Movie {
    adult:boolean;
    name:string;
    genres:Genre[];
    poster_path:string;
}

export interface Genre {
    id: number;
    name: string;
}

export const movies = _movies as Movie[];