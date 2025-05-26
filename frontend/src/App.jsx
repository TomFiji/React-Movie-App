import { useState } from 'react';
import Home from "./pages/Home.jsx";
import Favorites from './pages/Favorites.jsx';
import {Routes, Route} from "react-router-dom"
import './css/App.css';
import { MovieProvider } from './contexts/MovieContext.jsx';
import NavBar from "./components/NavBar"

function App() {

  return(
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
