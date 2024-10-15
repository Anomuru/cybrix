import React from 'react';
import cls from './telegramBotNotification.module.sass'
import news from 'shared/assets/images/news.svg'
import safetyDeliverImg from 'shared/assets/images/safetyDeliv.svg'
import phoneImg from 'shared/assets/images/phoneTg.svg'
import checkImg from 'shared/assets/images/checkImg.svg'
import yellowDeliver from 'shared/assets/images/yellowDeliv.svg'
import telegramScreen from 'shared/assets/images/telegramScreen.svg'

export const TelegramBotNotification = () => {
    return (
        <div className={cls.telegramBotNotification}>
            <div className={cls.telegramBotNotification_firstSight}>
                <h1 className={cls.telegramBotNotification_firstSight_article}>
                    Xabarnoma yangiliklar
                </h1>
                <img className={cls.telegramBotNotification_firstSight_notifImg} src={news} alt=""/>
            </div>
            <div className={cls.telegramBotNotification_secondSight}>
                <img src={safetyDeliverImg} alt=""/>
                <img src={phoneImg} alt=""/>
                <img src={checkImg} alt=""/>
                <img src={yellowDeliver} alt=""/>
                <img src={telegramScreen} alt=""/>
                <div className={cls.telegramBotNotification_secondSight_img}>
                    <p className={cls.telegramBotNotification_secondSight_img_paragraph}>
                        Botlar orqali mahsulot yoki xizmatlarga buyurtma berish tizimini joriy qilish mumkin. Mijozlar
                        bot orqali tanlovlar qilib, to‘lov qilishlari va buyurtma holatini kuzatishlari mumkin.
                    </p>
                    <h2 className={cls.telegramBotNotification_secondSight_img_article}>
                        Buyurtma berish  qabul qilish
                    </h2>
                </div>
            </div>
        </div>
    );
};
