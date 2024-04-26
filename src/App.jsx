import React from 'react'
import Nav from './components/Nav'
import RoutesComponents from './Route/RoutesComponents'

const App = () => {
  return (
    <div className='w-[80%] m-auto h-screen'>
      <Nav />
      <RoutesComponents />
    </div>
  )
}

export default App