
import { useState, useEffect } from 'react';
import MovieContainer from './MovieContainer';
import './App.css';
import MovieForm from './MovieForm';


function App() {
  const [movies, setState] = useState([])

  useEffect(() => 
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movie => setState(movie)), []
  )

  const addMovie = newMovie => setState([...movies, newMovie])
  return (
    <div className="App">
      <MovieContainer movies={movies}/>
      <MovieForm addMovie={addMovie}/>
    </div>
  );
}

export default App;
