import styles from './Loader.module.scss';

export default function Loader({ size }) {
    return <div className={styles[size]}></div>
}