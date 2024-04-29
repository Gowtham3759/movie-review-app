import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const SearchResultPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [movies, setMovies] = useState([]);

  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=90a83017dcd0ef93c3e5474af9093de9&query=${query}`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
    .catch(error => console.error('Error fetching data:', error));
    }, [query]);

  return (
    <div>
        <h1>Search Results for: {query}</h1>
    <div className="grid">
      {movies.map(movie => (
          <div className="item" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SearchResultPage;
