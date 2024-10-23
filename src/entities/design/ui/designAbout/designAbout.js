import {memo} from 'react';

import cls from "./designAbout.module.sass";
import image from "shared/assets/images/designAboutImage.png";

export const DesignAbout = memo(() => {
    return (
        <div className={cls.designAbout}>
            <img
                className={cls.designAbout__image}
                src={image}
                alt=""
            />
            <div className={cls.container}>
                <h1 className={cls.container__title}>
                    Veb-dizayn
                </h1>
                <ul className={cls.container__list}>
                    <li className={cls.container__item}>
                        Veb-sayt dizayni: Foydalanuvchi uchun qulay va <br/>
                        estetik jihatdan chiroyli saytlar yaratish, mobil <br/>
                        moslashuvchan dizayn va foydalanuvchi interfeysi <br/>
                        (UI).
                    </li>
                    <li className={cls.container__item}>
                        Foydalanuvchi tajribasi dizayni (UX): Mijozlar uchun <br/>
                        oson va intuitiv navigatsiya yaratish, foydalanuvchi <br/>
                        tajribasini yaxshilash.
                    </li>
                    <li className={cls.container__item}>
                        Veb-banneryalar: Veb-saytlar yoki onlayn marketing <br/>
                        uchun reklamalar va bannerlar yaratish.
                    </li>
                </ul>
            </div>
        </div>
    )
})
