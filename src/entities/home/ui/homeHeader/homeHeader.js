import cls from "./homeHeader.module.sass"
import headerLogo from "shared/assets/img/Cybrix logo.svg"
import {Button} from "../../../../shared/ui/button/button";
import {useState} from "react";

const headerList = [
    {name: "home", label: "Home"},
    {name: "about_us", label: "About us"},
    {name: "telegram_bot", label: "Telegram-bot"},
    {name: "design", label: "Dizayn"},
    {name: "wep_app", label: "Web App"},
    {name: "projects", label: "Projects"},
    {name: "contact", label: "Contact"},
]
export const HomeHeader = () => {


    const [list, setList] = useState(headerList[0].name)

    const [active , setActive] = useState(false)
    console.log(list)

    return (
        <div className={cls.header}>
            <div className={cls.header__wrapper}>
                <div className={cls.header__logo}>
                    <img src={headerLogo} alt=""/>
                </div>

                <div className={cls.menu}>
                    <ul className={active ?  cls.active__menu : cls.header__list }>
                        {headerList?.map(item => (
                            <li onClick={() => setList(item.name)} className={list === item.name ? cls.active : null}>{item.label}</li>
                        ))}
                        <Button>Login</Button>
                    </ul>
                </div>
                <div onClick={() => setActive(!active)} className={cls.header__bars}>
                    <i className={"fas fa-bars"}/>
                </div>
            </div>
        </div>
    );
};

