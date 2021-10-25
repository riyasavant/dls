import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type Variant = "filled" | "outline" | "link";

export const Button: FunctionComponent<{
    children: ReactNode,
    variant?: Variant,
    onClick: () => void
}> = ({ children, variant, onClick }) => {
    const classNames = cn({
        [styles[`Button_variant_${variant}`]]: variant
    });
    return(
        <button 
            className={classNames}
            onClick={onClick}
        >
            {children}
        </button>
    )
}