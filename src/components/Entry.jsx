import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'

const Entry = () => {
  const [posts, setposts] = useState([])
  const getPosts = async () => {
    try {
      const { data } = await axios.get('posts')
      console.log(data);
      setposts(data)

    } catch (error) {
      console.log(error);
    }
  }
  const navigate = useNavigate()
  const submitHandler = () => {
    navigate('/Library')

  }
  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-bold m-5'>This is EntryPage</h1>
      <button onClick={getPosts} className='bg-blue-500 m-5 text-white px-3 py-3 rounded'>Get Posts</button> <br />
      <button onClick={submitHandler} className='px-5 py-3 rounded bg-red-300 m-5 text-white'>Submit</button>
      {posts.map((post, i) => { return <h1 key={i}>{post.id} {post.title}</h1> })}
    </div>
  )
}

export default Entry