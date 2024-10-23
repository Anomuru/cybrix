import {memo} from 'react';
import classNames from "classnames";

import cls from "./designMaterial.module.sass";
import businessCardImage from "shared/assets/images/designMaterialBusinessCard.png";
import flyersImage from "shared/assets/images/designMaterialFlyers.png";
import graphicImage from "shared/assets/images/designMaterialGraphic.png";
import advertisingImage from "shared/assets/images/designMaterialAdvertising.png";
import logoImage from "shared/assets/images/designMaterialLogo.png";

export const DesignMaterial = memo(() => {
    return (
        <div className={cls.designMaterial}>
            <div className={cls.designMaterial__titleContainer}>
                <h1 className={cls.designMaterial__title}>
                    Bosma materiallar <br/>
                    dizayni
                </h1>
                <div className={cls.info}>
                    <div className={cls.info__image}>
                        <img
                            src={businessCardImage}
                            alt=""
                        />
                    </div>
                    <div className={cls.info__about}>
                        <h3 className={cls.info__title}>Vizitkalar</h3>
                        <p className={cls.info__text}>
                            Biznes vakillarining professional <br/>
                            ko‘rinishini ta’minlaydigan chiroyli va <br/>
                            uslubiy vizitka dizaynlari.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={classNames(
                    cls.designMaterial__titleContainer,
                    cls.designMaterial__graphicContainer
                )}
            >
                <img
                    src={graphicImage}
                    alt=""
                />
                <div className={cls.info}>
                    <div className={cls.info__image}>
                        <img
                            src={flyersImage}
                            alt=""
                        />
                    </div>
                    <div className={cls.info__about}>
                        <h3 className={cls.info__title}>Fleyerlar va broshyuralar</h3>
                        <p className={cls.info__text}>
                            Mahsulot yoki xizmatlar haqida ma’lumot <br/>
                            beradigan fleyerlar va broshyura dizaynlarini <br/>
                            yaratish.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={classNames(
                    cls.designMaterial__titleContainer,
                    cls.designMaterial__logoContainer
                )}
            >
                <div className={cls.info}>
                    <div className={cls.info__image}>
                        <img
                            src={advertisingImage}
                            alt=""
                        />
                    </div>
                    <div className={cls.info__about}>
                        <h3 className={cls.info__title}>Reklama bannerlari</h3>
                        <p className={cls.info__text}>
                            Bosma reklama bannerlari, afishalar va <br/>
                            taqdimot materiallarini ishlab chiqish.
                        </p>
                    </div>
                </div>
                <img
                    src={logoImage}
                     alt=""
                />
            </div>
        </div>
    )
})
