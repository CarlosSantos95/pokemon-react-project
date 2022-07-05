import styles from '../styles/Body.module.scss';
import PokemonInfo from './PokemonInfo';
import GeneralList from './GeneralList';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
export default function Body() {
    return (
        <div className={`${styles.bodyContent} container`}>
            <Router>
                <Routes>
                    <Route path="/" element={<GeneralList />} />
                    <Route path="/pokemoninfo/:name" element={<PokemonInfo />} />
                </Routes>
            </Router>
        </div>
    )
}
