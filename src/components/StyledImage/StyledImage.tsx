import React, { FC, InputHTMLAttributes} from "react";
import styles from "./StyledImage.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    url: string;
}

const StyledImage: FC<InputProps> = ({ url, ...rest}) => {
    return (
        <div className={styles.StyledImage}>
            <img src={url} alt="This is image" />
        </div>
    )
}

export default StyledImage; 