import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'

const Entry = () => {
  const [images, setimages] = useState([])
  const [page, setpage] = useState(1)
  const navigate = useNavigate()
  const getPosts = async () => {
    try {
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      setimages(data)
    } catch (error) {
      console.log(error);
    }
  }

  const submitHandler = () => {
    navigate('/Library')
  }
  useEffect(() => {
    getPosts()
  }, [page])
  return (
    <div className='mt-5'>
      <h1 className='text-3xl font-bold m-5'>This is EntryPage</h1>
      <button onClick={submitHandler} className='px-5 py-3 rounded bg-red-300 m-5 text-white'>Submit</button>
      {images.map((image, i) => (
        <div key={i}>
          <img src={image.download_url} alt="" />
          <small>{image.author}</small>
        </div>
      ))}


      <div>
        <span onClick={() => setpage(pre => pre - 1)} className='text-blue-500 text-2xl'>Prev</span>
        <span onClick={() => setpage(pre => pre + 1)} className='text-blue-500 text-2xl'>Next</span>

      </div>
    </div>
  )
}

export default Entry