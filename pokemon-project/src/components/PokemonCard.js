import { getTypeColor, firstCharUpperCase, getFormatedOrder } from '../utils/basicFunctions';
import styles from '../styles/PokemonCard.module.scss';

const PokemonCard = ({ pokemon }) => {
    const { name, order, types, sprites } = pokemon;
    return (
        <div className="card" >
            <div className={styles.topCardWrapper}>
                <img src={sprites.other['official-artwork'].front_default} className={`card-img-top ${styles.pokemonBg}`} alt="..." />
                <div className={`${styles.imageOverlay}`}>
                    <span className="card-title">{getFormatedOrder(order)}</span>
                </div>

            </div>
            <div className={styles.pokemonCardBody}>
                <h5 className={styles.pokemonName}>{firstCharUpperCase(name)}</h5>
                <div>
                    {types.map((element) => (
                        <span key={element.type.name}
                            className={`badge ${styles.typeBadge}`}
                            style={{ backgroundColor: getTypeColor(element.type.name) }}
                        >
                            {firstCharUpperCase(element.type.name)}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PokemonCard