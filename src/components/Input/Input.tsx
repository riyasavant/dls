import React, { FC, InputHTMLAttributes} from "react";
import styles from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest}) => {
    return (
        <div className={styles.input}>
            <input id={name} placeholder={label} {...rest} />
        </div>
    )
}

export default Input;