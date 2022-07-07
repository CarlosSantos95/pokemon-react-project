
// import { useLocation } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useSelector } from 'react-redux';
import PokemonLoader from './PokemonLoader';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const PokemonInfo = () => {
    // const sampleLocation = useLocation();
    // const currentPokemonUrl = sampleLocation.pathname.split("/")[1]
    const { currentPokemon } = useSelector(state => state.pokemons);
    const navigate = useNavigate();
    useEffect(function () {
    }, []);
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
                <PokemonCard pokemon={currentPokemon} />
            </div>
        )
    }
}
export default PokemonInfo