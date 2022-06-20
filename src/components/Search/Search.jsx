import styles from './Search.module.scss';

function Search({ setQuery }) {
    return (
        <div className={styles.search}>
            <input 
                placeholder="Search..."
                onChange={(e) => setQuery(e)}
            />
        </div>
    )
}

export default Search;