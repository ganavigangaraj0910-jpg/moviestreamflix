import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;    
const ACCESS_TOKE = import.meta.env.VITE_TMDB_ACCESS_TOKEN;     

export interface Movie {
    vote_average: number;
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}


export const movieApiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKE}`,
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        api_key: API_KEY,
    },
});

export const fetchPopularMovies = async (type: string, page: number): Promise<MovieResponse> => {
    try {
        const response = await movieApiClient.get(`${type}`, { params: { page } });  
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${type} movies:`, error);
        throw error;
    }
};



