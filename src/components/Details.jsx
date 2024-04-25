import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const submitHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-5'>Library List</h1>
            <h1 className='text-xl mt-3'>Book <span className='font-bold '>{id}</span></h1>
            <button className='px-3 py-2 bg-blue-500 text-white rounded mt-5' onClick={submitHandler}>Go Back</button>
        </div>
    )
}

export default Details