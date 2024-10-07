import React from 'react';

import {
    DesignAbout,
    DesignHome,
    DesignMaterial,
    DesignEmail
} from "entities/design";

import cls from "./designPage.module.sass";

export const DesignPage = () => {
    return (
        <div className={cls.design}>
            <DesignHome/>
            <DesignAbout/>
            <DesignMaterial/>
            <DesignEmail/>
        </div>
    )
}
