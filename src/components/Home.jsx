import React, { useState } from 'react'
import axios from '../utils/axios'
const Home = () => {
  const [users, setusers] = useState([])
  const getUsers = async () => {
    try {
      const { data } = await axios.get('users')
      setusers(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1 className='text-3xl font-bold m-5'>This is HomePage</h1>
      <button onClick={getUsers} className='bg-blue-500 m-5 text-white px-3 py-3 rounded'>Get User</button>
      {users.map((u, i) => { return <h1 key={i}>{u.id} {u.username}</h1> })}
    </>
  )
}

export default Home