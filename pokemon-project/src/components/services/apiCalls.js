import { setCharactersList, loadMorePokemonList, setCurrentPokemon } from '../../store/slices/pokemons';
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
                    const { sprites, types, order } = await getPokemonData(pokemon.name)
                    // const main_avatar = sprites.other['official-artwork'].front_default;
                    finalResult[i] = { ...finalResult[i], sprites, types, order }
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

export const getSpecificPokemonData = (name) => async (dispatch) => {
    let finalData = {};
    await getPokemonData(name).then(async (specificPokemonDataResult) => {
        const weaknessTypes = await getAllWeaknessTypes(specificPokemonDataResult.types).then(async (typesResult) => {
            return typesResult;
        }).catch(error => {
            console.log('ERROR', error)
            return error;
        });
        finalData = { ...specificPokemonDataResult, weaknessTypes };
    });
    dispatch(setCurrentPokemon(finalData));
}

async function getAllWeaknessTypes(array) {
    let weaknessArray = [];
    await Promise.all(array.map(async (element) => {
        await getPokemonWeakness(element.type.url).then(async (result) => {
            weaknessArray = [...weaknessArray, ...result];
        }).catch(error => {
            console.log('ERROR', error)
            return error;
        });
    }));
    return weaknessArray;
}

async function getPokemonWeakness(url) {
    return fetch(url)
        .then(res => res.json())
        .then(async response => {
            const result = response;
            const { double_damage_from } = result.damage_relations;
            return double_damage_from;
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}

async function getPokemonData(name) {
    const url = getUrlAPI(`pokemon/${name}`);
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