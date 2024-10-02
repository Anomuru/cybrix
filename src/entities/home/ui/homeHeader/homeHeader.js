
import cls from "./homeHeader.module.sass"
import headerLogo from "shared/assets/img/Cybrix logo.svg"
export const HomeHeader = () => {
    return (
        <div className={cls.header}>
            <div className={cls.header__wrapper}>
                <div className={cls.header__logo}>
                    <img src={headerLogo} alt=""/>
                </div>

                <div className={cls.header__list}>

                </div>
            </div>
        </div>
    );
};

