import React from "react";
import './Mainpage.css';
import { useState, useEffect } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
const Mainpage = () =>
{
  const handleSearch = (event) => {
    // handle the event
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=90a83017dcd0ef93c3e5474af9093de9')
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 9)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
		<div className="main">
        <nav className="navbar">
          <div className="navbar-left">
            <h1 className="app-name">APP NAME</h1>
          </div>
          <div className="navbar-right">
            <button className="nav-button">Reviews</button>
            <button className="nav-button">Users</button>
            <button className="nav-button">Movies</button>
            <button className="nav-button">Sign In / Sign Up</button>
          </div>
        </nav>
        <div className="search">
          <div>
          <TextField placeholder="Search..." variant="outlined" onChange={handleSearch}
              InputProps={{endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
              ),
              sx: {
                color: 'white', // Set the color of the text to white
                '& .MuiSvgIcon-root': {
                  color: 'white', // Set the color of the search icon to white
                },
              },
      
            }
            }
            
            sx={{
            // Adjust the border thickness and color here
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px', // Increase border thickness
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