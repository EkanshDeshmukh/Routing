import React from 'react'
import { useNavigate } from 'react-router-dom'

const Entry = () => {
  const navigate = useNavigate()
  const submitHandler = () => {
    navigate('/Library')

  }
  return (
    <div className='mt-5'>
      <button onClick={submitHandler} className='px-5 py-3 rounded bg-red-300 text-white'>Submit</button>
    </div>
  )
}

export default Entry