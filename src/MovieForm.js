import React from 'react'
import { useEffect, useState } from 'react';

export default function MovieForm({addMovie}) {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [actors, setActors] = useState([])
    const [selectedActor, setSelectedActor] = useState('')
    
    const getActors = () => fetch('http://localhost:3000/actors')
                            .then(response => response.json())
                            .then(actorApi => setActors(actorApi))

    const actorOptions = () => {return actors.map(actor => 
        {return (<option key={actor.id} value={actor.id}>{actor.name}</option>)}
    )}

    useEffect(getActors, [])

    const handleSubmit = event => {
        event.preventDefault()

        const bodyInfo = {
            name,
            genre,
            actor_id: selectedActor
        }
        const movieOption = {
            method : "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyInfo)
        }


        fetch('http://localhost:3000/movies', movieOption)
            .then(response => response.json())
            .then(addMovie)
    }

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
                <option value=''>Select Actor</option>
            </select>
            {/* <label value="">Add actor</label> */}
            <input type="submit" value="Add Movie"/>
        </form>
    )
}
