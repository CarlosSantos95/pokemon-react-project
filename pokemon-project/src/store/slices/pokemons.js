import { createSlice } from '@reduxjs/toolkit';
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        pokemonsList: [],
        loadMorePokemonList: true
        // dataLoaded: false,
        // currentUser: {} 
    },
    reducers: {
        // function to set the characters into the store and change the loader value
        setCharactersList: (state, action) => {
            // state.dataLoaded = action.payload.length === 0 ? false : true;
            // console.log('action.payload', action.payload, )
                state.pokemonsList = state.pokemonsList.concat(action.payload);
            
        },
        loadMorePokemonList: ( state, action) => {
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
        // setCurrentUser: (state, action) => {
        //     const currentIndex = state.list.findIndex(e => e.char_id === parseInt(action.payload));
        //     let character = state.list.filter((user) => user.char_id === parseInt(action.payload));
        //     if (character) {
        //         state.currentUser = state.list[currentIndex];
        //     }
        // },
        // reset the current user
        resetPokemonsList: (state, action) => {
            state.pokemonsList = [];
        }
    }
});

// export const {setCharactersList, setCharacterData, setCurrentUser, resetCurrentUser } = pokemonsSlice.actions
export const { setCharactersList, resetPokemonsList, loadMorePokemonList } = pokemonsSlice.actions

export default pokemonsSlice.reducer;