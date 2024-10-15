import {memo} from 'react';

import cls from "./designPacking.module.sass";
import designPackingImage from "shared/assets/images/designPacking.png";

export const DesignPacking = memo(() => {
    return (
        <div className={cls.designPacking}>
            <h2 className={cls.designPacking__title}>
                Mahsulot qadoqlash dizayni
            </h2>
            <div className={cls.designPacking__container}>
                <img src={designPackingImage} alt=""/>
                <ul className={cls.items}>
                    <div className={cls.items__inner}>
                        <li className={cls.items__title}>
                            Qadoqlash dizayni
                        </li>
                        <p className={cls.items__text}>
                            Qadoqlash dizayni: Mahsulotlar <br/>
                            uchun jalb qiluvchi va funksional <br/>
                            qadoqlash dizaynlarini yaratish.
                        </p>
                    </div>
                    <div className={cls.items__inner}>
                        <li className={cls.items__title}>
                            Etiketka dizayni
                        </li>
                        <p className={cls.items__text}>
                            Etiketka dizayni: Brendni aks <br/>
                            ettiruvchi va mahsulot haqida <br/>
                            to‘liq ma'lumot beradigan <br/>
                            etiketkalar ishlab chiqish.
                        </p>
                    </div>
                </ul>
            </div>
        </div>
    )
})
