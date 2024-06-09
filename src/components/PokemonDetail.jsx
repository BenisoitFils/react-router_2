import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="detail-container">
      {pokemon && (
        <div className="detail-content">
          <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="pokemon-info">
            <h2>{pokemon.name}</h2>
            <ul>
              <li>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</li>
              <li>Attack: {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</li>
              <li>Defense: {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</li>
              <li>Special Attack: {pokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat}</li>
              <li>Special Defense: {pokemon.stats.find(stat => stat.stat.name === 'special-defense').base_stat}</li>
              <li>Speed: {pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}</li>
              <li>Height: {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
            </ul>
            <p className="pokemon-types">{pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;

