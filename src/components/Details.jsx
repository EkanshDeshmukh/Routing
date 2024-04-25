import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const submitHandler = () => {
        navigate(-1)
    }
    const { pathname } = useLocation()
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-5'>Library List</h1>
            <h1 className='text-xl mt-3 mb-5'>Book Id : <span className='font-bold '>{id}</span></h1>
            < Link to={`${pathname}/profile`} className='bg-red-500 px-3 py-2 text-white rounded'>Profile</ Link>
            <br />
            <button className='px-3 py-2 bg-blue-500 text-white rounded mt-5' onClick={submitHandler}>Go Back</button>
        </div>
    )
}

export default Details