import React from 'react';
import cls from './telegramBotPaySystem.module.sass'
import payImg from 'shared/assets/images/paySystem.svg'
export const TelegramBotPaySystem = () => {
    return (
        <div className={cls.paySystem}>
            <img src={payImg} alt=""/>
            <div className={cls.paySystem_articleBox}>
                <h1 className={cls.paySystem_articleBox_article}>
                    To'lov tizimlari integratsiyasi
                </h1>
                <p className={cls.paySystem_articleBox_paragraph}>
                    Telegram botlari to‘lov tizimlari bilan integratsiyalashgan holda ishlashi mumkin. Bu orqali
                    mijozlar to‘lovlarni to‘g‘ridan-to‘g‘ri bot orqali amalga oshirishi mumkin bo‘ladi.
                </p>
            </div>
        </div>
    );
};
