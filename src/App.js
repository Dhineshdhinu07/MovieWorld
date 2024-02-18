import React,{ useEffect,useState } from "react"; 
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL='https://www.omdbapi.com?apikey=768896ed';
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    //Avengers movies are set to load on screen everytime reloading or starting the server using useEffect//
    useEffect(()=>{
     searchMovies('Avengers');
},[]);

// function to fetch and load data from api//
//using async function to took sometime for loading
    const searchMovies= async(title)=>{
//response is used to fetch the data and data is used to store data in json.//
        const response= await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    };
  return (
    <div className="app">
      <h1>MOVIEWORLD</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;