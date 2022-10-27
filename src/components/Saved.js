import '../styles/Saved.scss';
import { useEffect, useState } from 'react';
import Item from './Item';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Saved({pokedex, remove, click}) {
    const [expand, setExpand] = useState(true);

    useEffect(() => {

    }, [expand]);

    const handleClick = () => {
        setExpand(!expand);
    }
    return (
        <div className='saved'>
            <button className='label' onClick={handleClick}>
                <span> Saved Pokemon </span>
                {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
            <div className='items'>
                {expand 
                    ? pokedex.map(
                        (pokemon) => <Item key={pokemon.id} pokemon={pokemon} remove={remove} click={click} />)
                    : ''
                }
            </div>
        </div>
    )
}