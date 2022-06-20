import Search from '../Search/Search';
import styles from './Navbar.module.scss';

function Navbar({ title, setQuery }) {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>{title}</h1>
            <Search setQuery={setQuery} />
        </div>
    )
}

export default Navbar;