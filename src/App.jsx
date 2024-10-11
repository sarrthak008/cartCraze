import React from 'react'
import './App.css'
import Home from './views/Home'
import { TheamProvider } from './contexts/TheamContext'

function App() {

  return (
     <>
      <TheamProvider>
          <Home/>
      </TheamProvider>
     </>
  )
}

export default App
