import cls from "./button.module.sass"
import classNames from "classnames";

export const Button = ({children, extraClass, onClick, type , disabled}) => {
    return (
        <>
            {
                disabled ? <button className={classNames(cls.button, extraClass, {
                    [cls.danger]: type === "danger",
                    [cls.confirm]: type === "confirm",
                    [cls.disable]: type === "disable"
                })} disabled={disabled} onClick={onClick}>
                    {children}
                </button> : <button className={classNames(cls.button, extraClass, {
                    [cls.danger]: type === "danger",
                    [cls.confirm]: type === "confirm",
                    [cls.disable]: type === "disable",
                    [cls.trash]: type === "trash"
                })} onClick={onClick}>
                    {children}
                </button>
            }
        </>
    );
};

