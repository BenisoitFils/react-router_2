import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokemones from './components/Pokemones';
import PokemonDetail from './components/PokemonDetail';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </>
  );
};

export default App;

