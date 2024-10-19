import cls from "./button.module.sass"
import classNames from "classnames";

export const Button = ({children , extraClass , onClick}) => {
    return (
        <button className={classNames(cls.button , extraClass)} onClick={onClick}>
            {children}
        </button>
    );
};

