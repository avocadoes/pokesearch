import '../styles/Item.scss';

export default function Item({pokemon, remove, click}) {
    return(
        <div className='box'>
            <button className='item' onClick={() => click(pokemon)}>
                <img src={pokemon.image} alt={pokemon.name} height="50" />
                {pokemon.name}
            </button>
            <button onClick={() => remove(pokemon.id)}>
                x
            </button>
        </div>
    )
}