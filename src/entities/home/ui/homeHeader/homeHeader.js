import cls from "./homeHeader.module.sass"
import headerLogo from "shared/assets/img/Cybrix logo.svg"
import {Button} from "../../../../shared/ui/button";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {Context} from "pages/homePage/ui/homePage";

const headerList = [
    {name: "home", label: "Home"},
    {name: "about_us", label: "About us"},
    {name: "projects", label: "Projects"},
    {name: "contact", label: "Contact"},
]
export const HomeHeader = () => {
    const {sectionTop} = useContext(Context)

    const [list, setList] = useState(headerList[0].name)

    const [active, setActive] = useState(false)

    const navigate = useNavigate()
    const toLink = (top) => {
        setActive(false)
        window.scrollTo(0, top - 100)
    }
    return (
        <div className={cls.header}>
            <div className={cls.header__wrapper}>
                <div className={cls.header__logo}>
                    <img src={headerLogo} alt=""/>
                </div>

                <div onClick={() => setActive(!active)} style={active ? {left: 0} : null} className={cls.menu}>
                    <div onClick={() => setActive(!active)} className={`${cls.menu__bars} ${cls.header__bars}`}>
                        <i className={"fas fa-bars"}/>
                    </div>
                    <ul className={cls.header__list}>

                        {headerList?.map(item => (
                            <li onClick={() => {
                                toLink(sectionTop[item.name])
                                setList(item.name)
                            }} className={list === item.name ? cls.active : null}>{item.label}</li>
                        ))}
                        <Button onClick={() => navigate("/login")}>Login</Button>
                    </ul>
                </div>
                <div onClick={() => setActive(!active)} className={cls.header__bars}>
                    <i className={"fas fa-bars"}/>
                </div>
            </div>
        </div>
    );
};

