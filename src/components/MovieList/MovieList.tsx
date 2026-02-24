import  { useMemo,useState} from 'react'
import _ from 'lodash';
import '../../styles/components/MovieList.css'

import MovieCard from './MovieCard'
import MovieFilter from './MovieFilter'

import { usePopularMovies } from '../../hooks/usePopularMovies';


const MovieList = ({ type ,title , emoji }: { type: string, title: string, emoji: string }) => {
 
  const [minRating, setMinRating] = useState<number>(0);
  const [ratings] = useState<number[]>([6,7,8]);
  const [sortOption, setSortOption] = useState<{ by: string; order: 'asc' | 'desc' }>({ by : 'default', order: 'asc' });
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError } = usePopularMovies(type, page);

  // useMemo to filter and sort movies based on the selected options, and to avoid unnecessary computations on every render 
  // useMemo before the return statement to compute the filtered and sorted list of movies based on the original data, minimum rating, and sort options. This ensures that the filtering and sorting logic is only executed when the relevant dependencies change, improving performance.

   const filteredMovies = useMemo(() => {
    if(!data?.results) return [];
    let result  = data.results;
    // Filter movies based on the minimum rating
    if (minRating > 0) {
      result = result.filter(movie => movie.vote_average >= minRating);
    }
    // Sort movies based on the selected sort option
    if (sortOption.by !== 'default') {
      result = _.orderBy(result, [sortOption.by], [sortOption.order]);
    }
    return result;
  }, [data, minRating, sortOption]);

  // render loading state while fetching data
   if (isLoading) return <p>Loading...</p>;
   // render error state if there was an error fetching data
   if (isError) return <p>Error loading movies</p>;

  const handleFilter = (rate: number) => {
   setMinRating(rate === minRating ? 0 : rate); // Toggle the filter on and off
    // setRatings(prev => prev.map(r => r === rate ? 0 : r)); // Update the ratings state to reflect the selected filter
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    setSortOption(prev => ({...prev, [name]: value}));
  }

  

  return (
    <section className="movie-list" >
     <header className='align-between movie_list_header'>
      {/* Display the title and emoji for the movie list */}
       <h2 className='align-between movie_list_heading'>{title} <img src={emoji} alt={`${emoji} icon`} className='icon'/> </h2>
       <div className="align-between movie_list_filter_sorting">
        {/* Display the movie filter component */}
       {
        <MovieFilter minRating={minRating} onFilterClick={handleFilter} ratings = {ratings}/>
       }
        <select name="by" onChange={handleSortChange} value={sortOption.by} className='align-between movie_sorting'>
          <option value="default">Sort By</option>
          <option value="release_date">Release Date</option>
          <option value="vote_average">Rating</option>
        </select>

        <select name="order" onChange={handleSortChange} value={sortOption.order} className='align-between movie_sorting'>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
       </div>
     </header>
     <div className="movie_card">
      {/* Display the movie cards */}
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    
     </div>
         {/* Pagination Controls */}
      <div className="pagination">
        <button className='pagination-button'
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
        >
          Previous
        </button>

        <span>Page {page} of {data?.total_pages}</span>

        <button className='pagination-button'
          disabled={page === data?.total_pages}
          onClick={() => setPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </section>
  )
}

export default MovieList
