import React from 'react';
import cls from './telegramBotAutoNotification.module.sass'
import reminderImg from 'shared/assets/images/reminderImg.svg'
export const TelegramBotAutoNotification = () => {
    return (
        <div className={cls.autoNotification}>
            <div className={cls.autoNotification_contentBox}>
                <h1 className={cls.autoNotification_contentBox_article}>
                    Avtomatik eslatmalar
                </h1>
                <p className={cls.autoNotification_contentBox_paragraph}>
                    Telegram botlar mijozlarga xizmatlar muddati yoki mahsulot yangilanishlari haqida avtomatik
                    eslatmalar yuborishi mumkin. Bu mijozlarni doimiy ravishda jalb qilishga yordam beradi.
                </p>
            </div>
            <img src={reminderImg} alt=""/>
        </div>
    );
};

