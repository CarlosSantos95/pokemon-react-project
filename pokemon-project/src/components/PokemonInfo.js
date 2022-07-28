import { useSelector } from 'react-redux';
import PokemonLoader from './PokemonLoader';
import PokemonTypesContainer from './PokemonTypesContainer';
// import { useNavigate } from 'react-router-dom';
import styles from '../styles/PokemonInfo.module.scss';
import { getMainAbility } from '../utils/basicFunctions';
const PokemonInfo = () => {
    // get store data
    const { currentPokemon } = useSelector(state => state.pokemons);
    // const navigate = useNavigate();
    // const goBack = () => {
    //     navigate('/');
    // }
    if (!currentPokemon) {
        return <PokemonLoader />
    } else {
        return (
            <div className={`${styles.pokemonInfoWrapper}`}>
                {/* <button onClick={() => goBack()}>back</button> */}
                <h1>{currentPokemon.name}</h1>
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className={`${styles.pokemonImgWrapper}`}>
                                <img
                                    src={currentPokemon.sprites.other['official-artwork'].front_default}
                                    className={`card-img-top ${styles.pokemonBg}`}
                                    alt="..."
                                />
                            </div>
                            <div> PUNTOS BASE </div>
                        </div>
                        <div className="col-6">
                            <div>
                                Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.
                            </div>
                            <div>
                                <div className={`row ${styles.statsWrapper}`}>
                                    <div className="col-6">
                                        <div className={`${styles.displayGrid}`}>
                                            <span>Altura</span>
                                            <span>DATA 1</span>
                                        </div>
                                        <div className={`${styles.displayGrid}`}>
                                            <span>Peso</span>
                                            <span>DATA 2</span>
                                        </div>
                                        <div className={`${styles.displayGrid}`}>
                                            <span>Sexo</span>
                                            <span>DATA 3</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className={`${styles.displayGrid}`}>
                                            <span>Categoria</span>
                                            <span>DATA 1</span>
                                        </div>
                                        <div className={`${styles.displayGrid}`}>
                                            <span>Habilidad</span>
                                            <span>{getMainAbility(currentPokemon.abilities)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>TIPO</span>
                                <PokemonTypesContainer types={currentPokemon.types} />
                            </div>
                            <div>
                                <span>TIPO</span>
                                <PokemonTypesContainer types={currentPokemon.weaknessTypes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokemonInfo