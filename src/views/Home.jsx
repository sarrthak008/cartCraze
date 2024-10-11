import React from 'react'
import { useTheam } from '../contexts/TheamContext'
import Navbar from '../components/Navbar'

const Home = () => {

    let {theme} = useTheam()

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Home
