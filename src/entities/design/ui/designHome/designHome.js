import {memo} from 'react';
import appearanceImage from "shared/assets/images/designHomeAppearance.png";
import bookImage from "shared/assets/images/designHomeBook.png";
import personImage from "shared/assets/images/designHomePerson.png";

import cls from "./designHome.module.sass";

export const DesignHome = memo(() => {
    return (
        <div className={cls.designHome}>
            <h1 className={cls.designHome__title}>
                Brending va Vizual identifikatsiya
            </h1>
            <div className={cls.designHome__container}>
                <div className={cls.item}>
                    <img
                        className={cls.item__image}
                        src={bookImage}
                        alt="book_image"
                    />
                    <p className={cls.item__text}>
                        Brend kitobi <br/>
                        Brendning to‘g‘ri foydalanilishini <br/>
                        ta’minlash uchun dizayn <br/>
                        qoidalari va yo‘riqnomalar.
                    </p>
                </div>
                <div className={cls.item}>
                    <img
                        className={cls.item__image}
                        src={personImage}
                        alt="person_image"
                    />
                    <p className={cls.item__text}>
                        Logotip yaratish <br/>
                        Har qanday biznes uchun tanib <br/>
                        olinadigan va unikallikni aks <br/>
                        ettiruvchi logotip dizayni.
                    </p>
                </div>
                <div className={cls.item}>
                    <img
                        className={cls.item__image}
                        src={appearanceImage}
                        alt="appearance_image"
                    />
                    <p className={cls.item__text}>
                        Brend ko‘rinishi <br/>
                        Raqamli va bosma materiallar <br/>
                        uchun ranglar palitrasi, shriftlar, <br/>
                        vizual elementlar va brend <br/>
                        tamoyillarini ishlab chiqish.
                    </p>
                </div>
            </div>
        </div>
    )
})
