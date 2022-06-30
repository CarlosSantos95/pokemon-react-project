import { getTypeColor, firstCharUpperCase } from '../utils/basicFunctions';
import styles from '../styles/PokemonCard.module.scss';
const getFormatedOrder = (number) => {
    if (number <= 9999) {
        number = ("000" + number).slice(-3);
    }
    return `N.º${number}`;
}

export default function GeneralList({ item }) {
    const { name, order, types, main_avatar } = item;
    return (
        <div className="card" >
            <div className={styles.topCardWrapper}>
                <img src={main_avatar} className={`card-img-top ${styles.pokemonBg}`} alt="..." />
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
