import React, { useState, useEffect } from 'react';
import styles from './Alert.module.scss';

export default function Alert({ text, type, dismiss, isStatic }) {
    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        !isStatic && setTimeout(() => {
            setIsShowing(false);
        }, dismiss * 1000)
    }, [dismiss, isStatic]);

    return (
        isShowing && <div className={styles[type]}>{text}</div>
    );
};