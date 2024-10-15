import {memo} from 'react';

import cls from "./designVisualization.module.sass";
import marketingImage from "shared/assets/images/designVisualizationMarketing.png";
import businessImage from "shared/assets/images/designVisualizationBusiness.png";

export const DesignVisualization = memo(() => {
    return (
        <div className={cls.designVisualization}>
            <div className={cls.designVisualization__titleContainer}>
                <h2 className={cls.designVisualization__title}>
                    Infografika va ma'lumotlar <br/>
                    vizualizatsiyasi
                </h2>
                <div className={cls.designVisualization__titleInfo}>
                    <img src={marketingImage} alt=""/>
                    <div className={cls.inner}>
                        <p className={cls.inner__text}>
                            <span className={cls.inner__subText}>
                                Infografika yaratish
                            </span> <br/>
                            Murakkab ma'lumotlarni <br/>
                            oson tushunarli va qiziqarli <br/>
                            ko‘rinishda taqdim etish <br/>
                            uchun infografikalar <br/>
                            tayyorlash.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cls.designVisualization__infoContainer}>
                <div className={cls.info}>
                    <img
                        className={cls.info__image}
                        src={businessImage}
                        alt=""
                    />
                    <p className={cls.info__text}>
                        <span className={cls.info__subText}>
                            Taqdimotlar:
                        </span> <br/>
                        Ma'lumotlarni professional va chiroyli <br/>
                        taqdimotga aylantirish uchun grafik <br/>
                        dizayn xizmatlari.
                    </p>
                </div>
            </div>
        </div>
    );
})
