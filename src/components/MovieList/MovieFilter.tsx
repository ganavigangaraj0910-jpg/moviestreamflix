import '../../styles/components/MovieList.css'
interface MovieFilterProps {
  minRating: number;
  ratings: number[];
  onFilterClick: (minRating: number) => void;
}

const MovieFilter = ({minRating, ratings, onFilterClick}:MovieFilterProps) => {
  return (
  <ul className='align-between movie_filter'>
    {ratings.map((rate) => (
      <li
        key={rate}
        className={`movie_filter_item ${minRating === rate ? 'movie_filter_item active' : 'movie_filter_item'}`}
        onClick={() => onFilterClick(rate)}
      >
        {rate}+ star
      </li>
    ))}
  </ul>
  )
}

export default MovieFilter
