import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Entry from '../components/Entry'
import Library from '../components/Library'
import Details from '../components/Details'


const RoutesComponents = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Entry' element={<Entry />}></Route>
            <Route path='/Library' element={<Library />}>
                <Route path='/Library/:id' element={<Details />} />
            </Route>
            <Route path='*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    )
}

export default RoutesComponents