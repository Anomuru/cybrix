import cls from "./button.module.sass"

export const Button = ({children , extraClass}) => {
    return (
        <button className={`${cls.button} ${extraClass}`}>
            {children}
        </button>
    );
};

