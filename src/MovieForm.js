import React from 'react'
import { useEffect, useState } from 'react';

export default function MovieForm() {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [actors, setActors] = useState([])
    const [selectedActor, setSelectedActor] = useState('')
    
    const getActors = () => fetch('http://localhost:3000/actors')
                            .then(response => response.json())
                            .then(actorApi => setActors(actorApi))

    const actorOptions = () => {return actors.map(actor => 
        {return (<option>{actor.name}</option>)}
    )}

    useEffect(getActors, [])

    return (
        <form className='movie-form' onSubmit={handleSubmit}>
            <label htmlFor="movie-name">Name</label>
            <input 
                id="movie-name" 
                type="text" 
                value={name} 
                placeholder="name" 
                onChange={event => setName(event.target.value)}
            />
            <label htmlFor="movie-genre">Genre</label>
            <input 
                id="movie-genre" 
                type="text" 
                value={genre} 
                placeholder="genre" 
                onChange={event => setGenre(event.target.value)}
            />
            <select 
                id="actor" 
                type="text" 
                value={selectedActor} 
                onChange={event => setSelectedActor(event.target.value)}>
                {actorOptions()}
            </select>
            {/* <label value="">Add actor</label> */}
            <input type="submit" value="Add Movie"/>
        </form>
    )
}
