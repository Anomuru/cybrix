import {memo} from 'react';

import cls from "./designCompany.module.sass";
import personImage from "shared/assets/images/designCompanyPerson.png";
import bannerImage from "shared/assets/images/designCompanyBanner.png";

export const DesignCompany = memo(() => {
    return (
        <div className={cls.designCompany}>
            <div className={cls.designCompany__titleBack}>
                <h1 className={cls.designCompany__title}>
                    Reklama <br/>
                    kampaniyalari <br/>
                    uchun dizayn
                </h1>
            </div>
            <div className={cls.designCompany__container}>
                <div className={cls.designCompany__inner}>
                    <img src={bannerImage} alt=""/>
                    <p className={cls.designCompany__info}>
                        <span className={cls.designCompany__innerTitle}>
                            REKLAMA BANNERLARI:
                        </span> <br/>
                        Onlayn va oflayn reklama <br/>
                        bannerlarini yaratish, brendni <br/>
                        keng jamoatchilikka tanitish.
                    </p>
                </div>
                <div className={cls.designCompany__inner}>
                    <p className={cls.designCompany__info}>
                        <span className={cls.designCompany__innerTitle}>
                            Chegirma va aksiya dizaynlari:
                        </span> <br/>
                        Maxsus takliflar va chegirma <br/>
                        kampaniyalari uchun vizual <br/>
                        materiallar yaratish.
                    </p>
                    <img src={personImage} alt=""/>
                </div>
            </div>
        </div>
    )
})
