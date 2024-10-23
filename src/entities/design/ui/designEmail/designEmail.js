import {memo} from 'react';
import classNames from "classnames";

import cls from "./designEmail.module.sass";
import marketingImage from "shared/assets/images/designEmailMarketing.png";
import logoImage from "shared/assets/images/designEmailLogo.png"
import businessImage from "shared/assets/images/designEmailBusiness.png";

export const DesignEmail = memo(() => {
    return (
        <div className={cls.designEmail}>
            <div className={cls.designEmail__container}>
                <img
                    src={marketingImage}
                    alt=""
                />
                <div className={cls.designEmail__inner}>
                    <h1 className={cls.designEmail__title}>
                        Elektron pochta
                    </h1>
                    <p className={cls.designEmail__text}>
                        Marketing kampaniyalari uchun professional <br/>
                        elektron pochta dizaynlarini tayyorlash.
                    </p>
                </div>
            </div>
            <div
                className={classNames(
                    cls.designEmail__container,
                    cls.designEmail__reverseContainer
                )}
            >
                <div className={cls.designEmail__inner}>
                    <h1
                        className={classNames(
                            cls.designEmail__title,
                            cls.designEmail__reverseTitle
                        )}
                    >
                        Sotsial media grafikasi
                    </h1>
                    <p className={cls.designEmail__text}>
                        Ijtimoiy tarmoqlarda brendni targ‘ib qilish uchun <br/>
                        vizual kontent (postlar, bannerlar, reklamalar) <br/>
                        yaratish.
                    </p>
                </div>
                <img
                    src={logoImage}
                    alt=""
                />
            </div>
            <div
                className={classNames(
                    cls.designEmail__container,
                    cls.designEmail__reverseContainer
                )}
            >
                <img
                    src={businessImage}
                    alt=""
                />
                <div className={cls.designEmail__inner}>
                    <h1
                        className={classNames(
                            cls.designEmail__title,
                            cls.designEmail__reverseTitle
                        )}
                    >
                        Prezentatsiya
                    </h1>
                    <p className={cls.designEmail__text}>
                        Biznes uchrashuvlari va konferensiyalar <br/>
                        uchun sifatli prezentatsiya dizaynlarini ishlab <br/>
                        chiqish.
                    </p>
                </div>
            </div>
        </div>
    )
})
