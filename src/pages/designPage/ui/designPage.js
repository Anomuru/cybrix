import {DesignHome} from "entities/design";
import React from 'react';

import cls from "./designPage.module.sass";

export const DesignPage = () => {
    return (
        <div className={cls.design}>
            <DesignHome/>
        </div>
    )
}
