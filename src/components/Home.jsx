import React, { useEffect, useState } from 'react'
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
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h1 className='text-3xl font-bold m-5'>This is HomePage</h1>
      {users.map((u, i) => { return <h1 className=' w-[13vw] px-3 py-2 mb-5  font-semibold flex flex-wrap bg-red-200' key={i}>{u.id} {u.username}</h1> })}
    </>
  )
}

export default Home