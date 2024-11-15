import React, {useState} from 'react';

import {Button} from "shared/ui/button/button";
import {Input} from "shared/ui/input";

import cls from "./header.module.sass";
import {useNavigate} from "react-router";

export const Header = (props) => {

    const {
        setActiveFilter,
        setActiveAdd,
        onUpdateSearch
    } = props

    const navigate = useNavigate()


    return (
        <div className={cls.header}>
            <Button
                extraClass={cls.header__btn}
                onClick={setActiveFilter}
            >
                <i className="fas fa-filter"/>
                Filter
            </Button>
            <div className={cls.header__search}>
                <i className="fas fa-search"/>
                <Input
                    onChange={(e) => onUpdateSearch(e.target.value)}
                    extraClassName={cls.header__searchInner}
                    placeholder={"Search"}
                />
            </div>
            <div className={cls.header__btnCircle}>
                <div
                    className={cls.header__plus}
                    onClick={setActiveAdd}
                >
                    <i className={"fa fa-plus"}></i>
                </div>
                <div
                    className={cls.header__plus}
                    onClick={() => navigate("../addLanguage")}
                >
                    {/*<i className="fas fa-cog"/>*/}
                    <i className="fas fa-user-cog"/>
                </div>
            </div>
        </div>
    )
}
