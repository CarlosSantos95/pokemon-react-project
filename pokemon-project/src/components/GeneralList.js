import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPokemonListInfiniteScroll } from "./hooks/PokemonListInfiniteScroll";
import PokemonCard from "./PokemonCard";
import PokemonLoader from './PokemonLoader';
import styles from '../styles/GeneralList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificPokemonData } from './services/apiCalls';

const GeneralList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToPokemonInfo = async (name) => {
        await dispatch(getSpecificPokemonData(name)).then(() => {
            navigate(`/pokemoninfo/${name}`);
        })
    }
    const {  isLoading, hasNextPage, fetchNextPage } = getPokemonListInfiniteScroll();
    const { pokemonsList } = useSelector(state => state.pokemons);
    if (isLoading) {
        return (
            <PokemonLoader />
        )
    }
    return (
        <section>
            <InfiniteScroll
                className={styles.infiteScroll}
                dataLength={pokemonsList.length}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={<PokemonLoader />}
            >
                <div className="row">
                    {pokemonsList.map((item) => (
                        <div
                            key={item.name}
                            className={`col-3 ${styles.cardWrapper}`}
                            onClick={() => goToPokemonInfo(item.name)}
                        >
                            <PokemonCard pokemon={item} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </section >
    )
}

export default GeneralList