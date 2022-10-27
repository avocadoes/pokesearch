import '../styles/Card.scss';

export default function Card({pokemon, add}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='name'>
                    {pokemon.name? pokemon.name.toUpperCase() : 'loading...'}
                </div>
                <button className='save' onClick={add}>+ save</button>
            </div>
            <div className='row'>
                <div className="img">
                    <img src={pokemon.image} alt={pokemon.name} height="110" />
                </div>
                <div className='data'>
                    <div>Height: </div>
                    <div>{ (pokemon.height * 0.1).toFixed(1) } m</div>
                    <div>Weight: </div>
                    <div>{ (pokemon.weight * 0.1).toFixed(1) } kg</div>
                    <div>Type: </div>
                    <div>{ pokemon.type ? pokemon.type.join(', ') : 'loading'}</div>
                    <div>Abilities: </div>
                    <div>{ pokemon.abilities ? pokemon.abilities.join(', ') : 'loading'}</div>
                </div>
            </div>
            <div className='row'>Base-Stats:</div>
            <div className='row'>
                <div className='stats'>
                    { pokemon.stats ? pokemon.stats.map((item, index) => <div key={index}>{item.stat}: </div>) : 'loading'}
                    { pokemon.stats ? pokemon.stats.map((item, index) => <div className='bar' key={index}>{'|'.repeat(item.base/2)}</div>) : 'loading'}
                    { pokemon.stats ? pokemon.stats.map((item, index) => <div className='value' key={index}>{item.base}</div>) : 'loading'}
                </div>
            </div>
        </div>
    )
}