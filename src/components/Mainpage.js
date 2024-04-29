import React, { useState, useEffect } from "react";
import './Mainpage.css';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
      navigate(`/search?query=${searchTerm}`);
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=90a83017dcd0ef93c3e5474af9093de9')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="app-name">Movie Review App</h1>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Reviews</button>
          <button className="nav-button">Users</button>
          <button className="nav-button">Movies</button>
          <button className="nav-button">Sign In / Sign Up</button>
        </div>
      </nav>
      <div className="search">
        <div >
          <TextField
            placeholder="Search..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}> {/* Add onClick handler here */}
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                color: 'white',
                '& .MuiSvgIcon-root': {
                  
                  color: 'white',
                },
              },
            }}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '2px',
                borderColor: '#FFFFFF',
                color:'#FFFFFF'
              },
            }}
          />
        </div>
      </div>
      <h1>POPULAR MOVIES</h1>
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

export default Mainpage;
