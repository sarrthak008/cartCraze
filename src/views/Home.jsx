import React from 'react'
import { useTheam } from '../contexts/TheamContext'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {


  return (
    <div>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home
