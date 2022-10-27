import './App.scss';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Saved from './components/Saved';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [input, setInput] = useState(''); // user input
  const [name, setName] = useState('pikachu'); // current pokemon
  const [pokemon, setPokemon] = useState({}); // displayed pokemon
  const [pokedex, setPokedex] = useState([]); // pokemon in pokedex
  const [count, setCount] = useState(0);

  // useEffect to get info of default pokemon and user input pokemon
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(
      (res) => res.json()
    ).then(
      (data) => {
        console.log(data);
        setPokemon({
          id: count,
          name: name,
          height: data.height,
          weight: data.weight,
          image: data.sprites.front_default,
          abilities: data.abilities? data.abilities.map(item => item.ability.name) : [],
          type: data.types ? data.types.map(item => item.type.name) : [],
          stats: data.stats ? data.stats.map(item => ({
            stat: item.stat.name,
            base: item.base_stat
          })) : []
        });
        setCount(prev => prev+1);
        console.log(pokemon);
      }
    ).catch(e => console.log(e))
  }, [name]);

  // handle user input change
  const handleInput = (event) => {
    setInput(event.target.value);
  }

  // change name on submit
  const handleSubmit = () => {
    setName(input.toLowerCase());
  }

  // add pokemon to pokedex
  const handleAdd = () => {
    setPokemon(prev => ({...prev, id: count}));
    setCount(prev => prev+1);
    setPokedex(prev => [...prev, pokemon]);
  }

  // remove pokemon from pokedex
  const handleRemove = (id) => {
    setPokedex(pokedex.filter(pokemon => pokemon.id !== id));
  }

  // change name on click
  const handleClick = (pokemon) => {
    setPokemon(pokemon);
  }

  return (
    <div className='container'>
      <div className='main'>
        <div className='title'>PokeSearch</div>      
        <div className='search'>
          <input 
            type='text'
            placeholder='Enter a pokemon'
            className='input'
            value={input}
            onChange={handleInput}
          />
          <button className='find' onClick={handleSubmit}>
            <SearchIcon />
        </button>
        </div>
        <Card pokemon={pokemon} add={handleAdd}/>   
        
      </div>
      <Saved pokedex={pokedex} remove={handleRemove} click={handleClick} />
    </div>
  )
}

export default App;
