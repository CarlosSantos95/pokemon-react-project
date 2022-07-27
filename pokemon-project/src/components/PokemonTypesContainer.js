import { getTypeColor, firstCharUpperCase } from '../utils/basicFunctions';
import styles from '../styles/PokemonCard.module.scss';

const renderType = (type) => {
    const itemName = type.type ? type.type.name : type.name;
    return (
        <span key={itemName}
            className={`badge ${styles.typeBadge}`}
            style={{ backgroundColor: getTypeColor(itemName) }}
        >
            {firstCharUpperCase(itemName)}
        </span>
    )
}
const PokemonTypesContainer = ({ types }) => {
    return (
        <div>
            {types.map((element) => (
                renderType(element)
            ))}
        </div>
    )
}
export default PokemonTypesContainer