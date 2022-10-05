import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home, Pokemon, Berries}  from './pages/pages.js'

export default function App () {

    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Pokemon' element={<Pokemon/>}/>
                <Route path='/Berries' element={<Berries/>}/>
            </Routes>
        </div>
    )
}