import React from 'react';
import SumoCard from './MovieCard';

export default function MovieContainer({movies}) {
    const showMovies = () =>  {return movies.map( movie =>  
            (<SumoCard key={movie.id} movie={movie}/>))}

       
    return (
        <div>
            {showMovies()}
        </div>
    )
}
