import styles from '../styles/PokemonLoader.module.scss';
export default function PokemonLoader() {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.mainSpinner} />
        </div>
    )
}