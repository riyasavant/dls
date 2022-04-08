import styles from './Badge.module.scss';

export default function Badge({ text, type }) {
    return (
        <span className={styles[type]}>{text}</span>
    )
}