import React from 'react';
import styles from './List.module.scss';

export default function List({ data }) {
    return (
        <div>
            {data.map(item => {
                return (
                    <div className={styles.listItem}>{item}</div>
                )
            })}
        </div>
    )
}