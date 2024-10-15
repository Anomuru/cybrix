import React from 'react';

import {
    DesignAbout,
    DesignHome,
    DesignMaterial,
    DesignEmail,
    DesignPacking,
    DesignInterface,
    DesignCompany,
    DesignVisualization,
    DesignFooter
} from "entities/design";

import cls from "./designPage.module.sass";

export const DesignPage = () => {
    return (
        <div className={cls.design}>
            <DesignHome/>
            <DesignAbout/>
            <DesignMaterial/>
            <DesignEmail/>
            <DesignPacking/>
            <DesignInterface/>
            <DesignCompany/>
            <DesignVisualization/>
            <DesignFooter/>
        </div>
    )
}
