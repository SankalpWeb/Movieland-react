import React, { useState, useEffect } from "react";
import MovieCard from './MovieCard';
import './App.css';
import Searchicon from './search.svg'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2db5e44e'
const App = ()=> {

  const [movies,setmovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json(); 
    setmovies(data.Search);
  }

  const movie1 = {
    
      "Title": "Superman & Lois",
      "Year": "2021–",
      "imdbID": "tt11192306",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
  
  }

  useEffect (()=>{
    searchMovies('Superman');
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img src={Searchicon} alt="search" onClick={()=>searchMovies(searchTerm)} />
      </div>

      {
        movies.length > 0
        ?(
          <div className="container">
            {movies.map((movie)=>(
              <MovieCard movie = {movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
