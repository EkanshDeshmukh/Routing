import React from 'react'
import Nav from './components/Nav'
import RoutesComponents from './Route/RoutesComponents'
import axios from 'axios'

const App = () => {
  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }
  return (
    <div className='w-[80%] m-auto h-screen'>
      <Nav />
      <hr />
      <button onClick={getUsers} className='bg-blue-500 mt-5 text-white px-3 py-3 rounded'>Get User</button>
      <RoutesComponents />

    </div>
  )
}

export default App