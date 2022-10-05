import './Pokemon.css'
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"

export default function Pokemon () {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=102')
            .then(res => res.json())
            .then(res => setPokemons(res))
    }, [])

    return (
        <div className="pokemon">
            <Navbar/>
            <h1>Pokemons</h1>
            <div className="grid">
                {pokemons.results?.map(user => (
                    <a href={`https://www.wikidex.net/wiki/${user.name}`} className='grid_item'>{user.name}</a>
                ))}
            </div>
        </div>
    )
}