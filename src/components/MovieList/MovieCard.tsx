import Star from '../../assets/images/star.png'
import '../../styles/components/MovieCard.css'

interface Movie {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    overview: string;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
    const webUrl = import.meta.env.VITE_TMBD_WEB_URL;
  return (
   
        <a href={`${webUrl}/movie/${movie.id}`} className="movie_card_link" target='blank'>
             <img src={movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : "https://www.designmantic.com/blog/wp-content/uploads/2017/10/Oblivion.jpg"}  alt={movie.title}  className='movie_poster'/>
            <div className="movie_details">
                <h3 className="movie_title">{movie.title}</h3>
                <div className="align-left movie_rating">
                  <img src={Star} alt="star icon" className='rating_icon'/>
                  <span className="movie_rating_value text-xs">{movie.vote_average}</span>
                </div>
                <p className="movie_description">{movie.overview ? movie.overview.substring(0, 100) + '...' : 'No description available.'}</p>
            </div>
        </a>

    
  
  )
}

export default MovieCard
