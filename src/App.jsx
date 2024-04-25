import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Entry from './components/Entry'
import Library from './components/Library'
import Details from './components/Details'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='w-[80%] m-auto h-screen'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Entry' element={<Entry />}></Route>
        <Route path='/Library' element={<Library />}></Route>
        <Route path='/Library/:id' element={<Details />}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App