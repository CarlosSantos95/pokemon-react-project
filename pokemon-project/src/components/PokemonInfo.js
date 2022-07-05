
// import { useLocation } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useSelector } from 'react-redux';
import PokemonLoader from './PokemonLoader';
import { useEffect } from "react";
const PokemonInfo = () => {
    // const sampleLocation = useLocation();
    // const currentPokemonUrl = sampleLocation.pathname.split("/")[1]
    const { currentPokemon } = useSelector(state => state.pokemons);
    useEffect(function () {
    }, []);
    if (!currentPokemon) {
        return <PokemonLoader />
    } else {
        return (
            <div className="card" >
                <h1>{currentPokemon.name}</h1>
                <PokemonCard pokemon={currentPokemon} />
            </div>
        )
    }
}
export default PokemonInfo