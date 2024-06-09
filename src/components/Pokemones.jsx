import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Pokemones.css';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const results = response.data.results;

        const detailedPokemones = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return pokemonDetails.data;
          })
        );

        setPokemones(detailedPokemones);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemones();
  }, []);

  const handleSelectChange = (event) => {
    const selectedPokemonName = event.target.value;
    const pokemon = pokemones.find(pokemon => pokemon.name === selectedPokemonName);
    setSelectedPokemon(pokemon);
    navigate(`/pokemon/${selectedPokemonName}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pokemones-container">
      <h1>Selecciona un Pokemon</h1>
      <div>
        <select onChange={handleSelectChange}>
          <option value="">Pokemones</option>
          {pokemones.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        {selectedPokemon && (
          <div>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              style={{ width: '200px' }}
            />
            <div>
              <h2>{selectedPokemon.name}</h2>
              <p>Height: {selectedPokemon.height}</p>
              <p>Weight: {selectedPokemon.weight}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemones;
