import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
        <h1 className="home-title">Bienvenido maestro Pokemon</h1>
        <img src="..\src\assets\img\pkc.png" alt="Pokémon" className="home-image" />
    </div>
  );
};

export default Home;

