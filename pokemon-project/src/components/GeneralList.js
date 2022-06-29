import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonLoader from './PokemonLoader';
import styles from '../styles/GeneralList.module.scss';
import { getPokemonListInfiniteScroll } from "./hooks/PokemonListInfiniteScroll";
import PokemonCard from "./PokemonCard";

export default function GeneralList() {
    const { pokemonsList, isLoading, hasNextPage, fetchNextPage } = getPokemonListInfiniteScroll();
    if (isLoading) {
        return (
            <PokemonLoader />
        )
    }
    return (
        <section>
            <div className="container">
                <h1>POKEMON LIST VIEW</h1>
                <InfiniteScroll
                    className={styles.infiteScroll}
                    dataLength={pokemonsList.length}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loader={<PokemonLoader />}
                >
                    <div className="row">
                        {pokemonsList.map((item) => (
                            <div className={`col-3 ${styles.cardWrapper}`} key={item.name}>
                                <PokemonCard item={item} />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </section >
    )
}