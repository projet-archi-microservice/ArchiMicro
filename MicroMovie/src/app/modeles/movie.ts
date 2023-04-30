import _movies from './movie.json';

export interface Movie {
    id:number;
    title:string;
    genre_ids:Genre[];
    poster_path:string;
    release_date:string;
    vote_average:number;
}

export interface Genre {
    id: number;
    name: string;
}
