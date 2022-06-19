import styles from './StyledButton.module.scss';

export default function StyledButton({text, url}) {
    return <div className={styles.container}>
                <div><a href={url}><span>{text}</span></a></div>
            </div>

}