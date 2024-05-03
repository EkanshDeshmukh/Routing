import React, { useEffect, useState,useRef } from 'react'
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
  const focusRef = useRef(null)
  useEffect(()=>{
      console.log('Home.jsx Mounted');
      focusRef.current.focus()
      return ()=>{
          console.log('Home.jsx Unmounted');
      }
  },[])
  console.log('Home.jsx Loaded');
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h1 className='text-3xl font-bold m-5'>This is HomePage</h1>
      <input ref={focusRef} type="text" placeholder='Username' className='border px-4 py-2'  /> <br /><br />
        <input ref={focusRef} type="text" placeholder='email' className='border px-4 py-2' />

      {users.map((u, i) => { return <h1 className=' w-[13vw] px-3 py-2 mb-5  font-semibold flex flex-wrap bg-red-200' key={i}>{u.id} {u.username}</h1> })}
    </>
  )
}

export default Home