import React, { FC, InputHTMLAttributes} from "react";
import style from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </div>
    )
}

export default Input;