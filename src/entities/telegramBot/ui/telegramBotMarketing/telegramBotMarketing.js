import React from 'react';
import cls from './telegramBotMarketing.module.sass'
import targetImg from 'shared/assets/images/targetImg.svg'
export const TelegramBotMarketing = () => {
    return (
        <div className={cls.marketing}>
            <h1 className={cls.marketing_article}>
                Marketing va reklama
            </h1>
            <div className={cls.marketing_imgBox}>
                <p className={cls.marketing_imgBox_paragraph}>
                    Telegram botlari orqali maxsus aksiyalar, chegirmalar va bonus dasturlari haqida reklama kampaniyalari
                    o'tkazish mumkin. Botlar orqali mijozlarga shaxsiy takliflar yuborish va ularni qiziqtirish osonroq.
                </p>
            </div>

            <div className={cls.marketing_imgBox}>
                <img src={targetImg} alt=""/>
            </div>

        </div>
    );
};
