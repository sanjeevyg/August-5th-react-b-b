import React from 'react'

export default function MovieCard({movie}) {
    return (
        <div className="movieCard">
            <h1>Name: {movie.name}</h1>
            <h2>{movie.genre}</h2>
            <h2>{movie.actor.name}</h2>
        </div>
    )
}
