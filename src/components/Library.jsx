import React from 'react'
import { Link } from 'react-router-dom'

const Library = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold mt-5'>Library</h1>
      <ul className='m-3 list-none'>
        <li className='list-item'><Link to="/Library/1">Book 1</Link></li>
      </ul>
      <ul className='m-3 list-none'>
        <li className='list-item'><Link to="/Library/2">Book 2</Link></li>
      </ul>
      <ul className='m-3 list-none'>
        <li className='list-item'><Link to="/Library/3">Book 3</Link></li>
      </ul>
    </div>
  )
}

export default Library