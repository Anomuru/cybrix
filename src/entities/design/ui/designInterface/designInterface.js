import {memo} from 'react';

import cls from "./designInterface.module.sass";
import phoneImage from "shared/assets/images/designInterfacePhone.png";

export const DesignInterface = memo(() => {
    return (
        <div className={cls.designInterface}>
            <img src={phoneImage} alt=""/>
            <div className={cls.designInterface__container}>
                <h1 className={cls.designInterface__title}>
                    Ilova va interfeys <br/>
                    dizayni
                </h1>
                <p className={cls.designInterface__info}>
                    <span className={cls.designInterface__innerTitle}>
                        Mobil ilova dizayni:
                    </span> <br/>
                    Mobil ilovalar uchun foydalanuvchi interfeysi va <br/>
                    tajribasi dizaynlarini yaratish.
                </p>
                <p className={cls.designInterface__info}>
                    <span className={cls.designInterface__innerTitle}>
                        Raqamli mahsulotlar dizayni:
                    </span> <br/>
                    Raqamli mahsulotlar dizayni: Platformalar, onlayn <br/>
                    do'konlar, xizmatlar va ilovalar uchun interaktiv va <br/>
                    moslashuvchan dizaynlar yaratish.
                </p>
            </div>
        </div>
    )
})
