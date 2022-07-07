import { useInfiniteQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getPokemonListOffset } from '../services/apiCalls';
export function getPokemonListInfiniteScroll() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = useInfiniteQuery(
        ["pokemonList"],
        async ({ pageParam = 1, limit = 20 }) => {
            const result = await dispatch(getPokemonListOffset(pageParam, limit))
            return result;
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                if (!lastPage.length === 0) return false;
                return allPages.length + 1;
            },
        },
    );

    const pokemonsList =
        result.data?.pages.reduce(
            (prevPokemons, page) =>
                prevPokemons?.concat(page),
            []
        ) ?? [];
    return { ...result, pokemonsList }
}