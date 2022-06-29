import { useInfiniteQuery } from 'react-query';
import { getPokemonListOffset } from '../services/apiCalls';

export async function getInfiniteData() {
  const {
    data,
    fetchMore,
    canFetchMore,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useInfiniteQuery(
    'pokemons',
    async (_, offset) => await getPokemonListOffset({ offset }),
    { getFetchMore: data => data.offset + 20 },
  );
  return { data, fetchMore, canFetchMore }
}

