import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchPopularMovies } from "../services/MovieDetails";

export const usePopularMovies = (type: string, page: number) => {
    return useQuery({
        queryKey: ['popularMovies', type, page],  
        queryFn: () => fetchPopularMovies(type, page),
        placeholderData: keepPreviousData,  
        // keepPreviousData: true,
        staleTime: 1000 * 60 * 5,  
    });
}