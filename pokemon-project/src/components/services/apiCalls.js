import { setCharactersList, loadMorePokemonList } from '../../store/slices/pokemons';
// TODO catch response errors
// basic function to get a specific api call with a custom param
function getUrlAPI(param) {
    return `https://pokeapi.co/api/v2/${param}`;
}

export const getPokemonListOffset = (page, limit) => (dispatch) => {
    let offset = (page - 1) * limit;
    const url = getUrlAPI(`pokemon/?limit=${limit}&offset=${offset}`);
    return fetch(url)
        .then(res => res.json())
        .then(async response => {
            const result = response.results;
            if (result && result.length === 0) {
                // there are no more results
                dispatch(loadMorePokemonList(false));
            } else {
                let finalResult = result;
                for (let i = 0; i < result.length; i++) {
                    const pokemon = result[i];
                    const { sprites } = await getPokemonData(pokemon.name)
                    const main_avatar = sprites.other['official-artwork'].front_default;
                    finalResult[i] = { ...finalResult[i], main_avatar }
                    // finalResult[i] = { ...pokemonData }
                }
                dispatch(setCharactersList(finalResult));
                return finalResult;
            }
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}
async function getPokemonData(pokemon) {
    const url = getUrlAPI(`pokemon/${pokemon}`);
    return fetch(url)
        .then(res => res.json())
        .then(async response => {
            const result = response;
            return result;
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}