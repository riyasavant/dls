import styles from './Spinner.module.scss';

export default function Loader({ speed }) {
    return <div className={styles[speed]}></div>
}