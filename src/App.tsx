// import React from 'react'
// import './styles/index.css'
import Navbar from './components/Navbar/Navbar'
import Fire from '../src/assets//images/fire.png'

import Star from '../src/assets//images/star.png'
import Party from '../src/assets/images/party.png'

import MovieList from './components/MovieList/MovieList'
function App() {
  return (
    <div className='app '>
      <Navbar />
      <MovieList type="/movie/popular" title="Popular" emoji={Fire}/>
      <MovieList type="/movie/top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="/movie/upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
}

export default App
