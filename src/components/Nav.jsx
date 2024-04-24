import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='w-full h-16 bg-zinc-200 flex text-center font-semibold p-5 items-center justify-center gap-10'>
      < NavLink className={(e)=> e.isActive ? "text-red-800" : "" } to='/'>Home</ NavLink>
      < NavLink className={(e)=> e.isActive ? "text-red-800" : ""} to='/Entry'>Entry</ NavLink>
      < NavLink className={(e)=> e.isActive ? "text-red-800" : ""} to='/Library'>Library</ NavLink>
    </nav>
  )
}

export default Nav