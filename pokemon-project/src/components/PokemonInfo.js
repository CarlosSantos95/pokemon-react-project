import { useSelector } from 'react-redux';
import PokemonLoader from './PokemonLoader';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PokemonInfo.module.scss';
const PokemonInfo = () => {
    // get store data
    const { currentPokemon } = useSelector(state => state.pokemons);
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
    if (!currentPokemon) {
        return <PokemonLoader />
    } else {
        return (
            <div className="card" >
                <button onClick={() => goBack()}>back</button>
                <h1>{currentPokemon.name}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img
                                src={currentPokemon.sprites.other['official-artwork'].front_default}
                                className={`card-img-top ${styles.pokemonBg}`}
                                alt="..."
                            />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.
                                </div>
                                <div className="col-12">
                                    stats
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            PUNTOS BASE
                        </div>
                        <div className="col-6">
                            TIPOS
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokemonInfo