import React from 'react';

import {Button} from "shared/ui/button/button";
import {Input} from "shared/ui/input";

import cls from "./header.module.sass";

export const Header = (props) => {

    const {
        setActiveFilter,
        setActiveAdd
    } = props

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
                    extraClassName={cls.header__searchInner}
                    placeholder={"Search"}
                />
            </div>
            <div
                className={cls.header__plus}
                onClick={setActiveAdd}
            >
                <i className={"fa fa-plus"}></i>
            </div>
        </div>
    )
}
