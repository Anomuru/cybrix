import cls from "./menu.module.sass";

import homeLogo from "shared/assets/img/Cybrix logo.svg"
import {menuConfig} from "./model/config/menuConfig";
import {NavLink} from "react-router-dom";


export const Menubar = () => {

    const renderMenu = () => {
        return menuConfig.map((item, i) => (
            <NavLink
                to={`${item.to}`}
                key={i}
                className={({isActive}) =>
                    isActive ? `${cls.link} ${cls.active}` : `${cls.link}`
                }
            >
                    <span
                        className={cls.link__href}
                    >
                        <i className={`${item.icon} icon-link`}/>
                        <span className={cls.link__title}>{item.name}</span>
                    </span>
            </NavLink>
        ))
    }
    const render = renderMenu()
    return (
        <nav className={cls.menu}>
            <div className={cls.menu__logo}>
                <img src={homeLogo} alt=""/>
            </div>
            <div className={cls.menu__inner}>
                {render}
            </div>
        </nav>
    );
};
