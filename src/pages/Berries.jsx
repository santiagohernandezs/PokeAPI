import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"

export default function Berries () {
    const [berries, serBerries] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/berry?limit=99')
            .then(res => res.json())
            .then(res => serBerries(res))
    }, [])

    return (
        <div className="berries">
            <Navbar />
            <h1>Berries</h1>
            <div className="grid">
                {berries.results?.map(berry => (
                    <a href={`https://pokemon.fandom.com/wiki/${berry.name}`} className='grid_item'>{berry.name}</a>
                ))}
            </div>
        </div>
    )
}