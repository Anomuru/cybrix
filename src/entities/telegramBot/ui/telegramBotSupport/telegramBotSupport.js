import React from 'react';
import cls from './telegramBotSupport.module.sass'
import tgBot from 'shared/assets/images/tgBot.svg'

export const TelegramBotSupport = () => {
    return (
        <div className={cls.telegramBotSupport}>
            <div className={cls.telegramBotSupport_leftSight}>
                <h1 className={cls.telegramBotSupport_leftSight_mainArticle}>
                    Mijozlarni <br/> qo'llab-quvvatlash
                </h1>
                <p className={cls.telegramBotSupport_leftSight_comment}>
                    Telegram botlari 24/7 mijozlarga yordam berish uchun ishlatiladi. Mijozlar tez-tez beriladigan
                    savollarga javob olishi, xizmatlar yoki mahsulotlar haqida ma'lumot olishlari mumkin.
                    Botlar avtomatik tarzda buyurtma qabul qilish, xabarlar yuborish va mijozlarning so'rovlarini qayta
                    ishlashga yordam beradi.
                </p>
            </div>
            <div className={cls.telegramBotSupport_rightSight}>
                <img className={cls.telegramBotSupport_rightSight_botImg} src={tgBot} alt=""/>
            </div>
            <div className={cls.telegramBotSupport_moreInfoBox}>
                <h2 className={cls.telegramBotSupport_moreInfoBox_moreInfo}>
                    Bizneslar yangi mahsulotlar, aksiyalar, chegirmalar yoki yangiliklar haqida mijozlarga xabar berish
                    uchun Telegram botlaridan foydalanishi mumkin. Push-xabarnomalar orqali mijozlar doimiy ravishda
                    yangiliklardan xabardor bo'lib turadilar.
                </h2>
            </div>

        </div>
    );
};
