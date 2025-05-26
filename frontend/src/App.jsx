import { useState } from 'react'
import MovieCard from './components/MovieCard.jsx'
import './App.css'

function App() {
  return(
    <>
      <MovieCard movie={{title: "Tom's Film", release_date: "2025"}}/>
    </>
  )
}

export default App
