import styles from '../styles/Body.module.scss';
import GeneralList from './GeneralList';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
export default function Body() {
    return (
        <div className={styles.bodyContent}>
            <Router>
                <Routes>
                    <Route path="/" element={<GeneralList />} />
                </Routes>
            </Router>
        </div>
    )
}
