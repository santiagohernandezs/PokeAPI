import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <navbar className='navbar'>
            <ul className='navbar_ul'>
            <Link to='/'>
                <li className='navbar_ul_li'>Home</li>
            </Link>
            <Link to='/Pokemon'>
                <li className='navbar_ul_li'>Pokemons</li>
            </Link>
            <Link to='/Berries'>
                <li className='navbar_ul_li'>Berries</li>
            </Link>
            </ul>
        </navbar>
    )
}