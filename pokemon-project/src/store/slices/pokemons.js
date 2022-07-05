import { createSlice, current } from "@reduxjs/toolkit";
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        pokemonsList: [],
        loadMorePokemonList: true,
        // dataLoaded: false,
        currentPokemon: undefined
    },
    reducers: {
        // function to set the characters into the store and change the loader value
        setCharactersList: (state, action) => {
            // state.dataLoaded = action.payload.length === 0 ? false : true;
            // console.log('action.payload', action.payload, )
            state.pokemonsList = state.pokemonsList.concat(action.payload);
        },
        loadMorePokemonList: (state, action) => {
            state.loadMorePokemonList = action;
        },
        // // function to upgrade the character info into the store and set the current user store
        // setCharacterData: (state, action) => {
        //     let character = state.list.filter((user) => user.char_id === action.payload.char_id);
        //     if (character) {
        //         const currentIndex = state.list.findIndex(e => e.char_id === action.payload.char_id)
        //         character = { ...action.payload }
        //         state.currentUser = character;
        //         state.list[currentIndex] = character;
        //     }
        // },
        // // set the current user to the store 
        setCurrentPokemon: (state, action) => {
            const currentIndex = state.pokemonsList.findIndex(e => e.name === action.payload.name);
            let pokemon = state.pokemonsList.filter((pokemon) => pokemon.name === action.payload.name);
            if (pokemon) state.currentPokemon = state.pokemonsList[currentIndex];
        },
        // reset the current user
        resetPokemonsList: (state, action) => {
            state.pokemonsList = [];
        }
    }
});

// export const {setCharactersList, setCharacterData, setCurrentPokemon, resetCurrentPokemon } = pokemonsSlice.actions
export const {
    setCharactersList,
    resetPokemonsList,
    loadMorePokemonList,
    setCurrentPokemon
} = pokemonsSlice.actions

export default pokemonsSlice.reducer;