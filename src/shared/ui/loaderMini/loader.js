import {memo} from 'react';
import cls from "./loader.module.sass"

export const MiniLoader = memo(() => {
    return (
        <div className={cls.loader}>
            <div className={cls.loader__circle}>
                <div></div>
            </div>
        </div>
    );
})