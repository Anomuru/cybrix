import {memo} from 'react';

import cls from "./designFooter.module.sass";

export const DesignFooter = memo(() => {
    return (
        <div className={cls.designFooter}>
            <h1 className={cls.designFooter__title}>
                Maxsus dizayn xizmatlari
            </h1>
            <p className={cls.designFooter__text}>
                Har qanday maxsus loyiha yoki mijoz talablari asosida vizual kontent yaratish, <br/>
                masalan, tadbirlar uchun afishalar, sovg‘a qutilari dizayni va boshqalar.
            </p>
        </div>
    );
})
