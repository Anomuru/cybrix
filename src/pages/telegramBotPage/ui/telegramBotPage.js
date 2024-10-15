import React from 'react';
import cls from './telegramBotPage.module.sass'
import {
    TelegramBotAnalistic,
    TelegramBotAutoNotification, TelegramBotGame, TelegramBotMarketing,
    TelegramBotNotification,
    TelegramBotPaySystem, TelegramBotSpecialServices,
    TelegramBotSupport,
    TelegramBotUserEmotsional
} from "../../../entities/telegramBot";
export const TelegramBotPage = () => {
    return (
        <div className={cls.telegram}>
            <TelegramBotSupport/>
            <TelegramBotNotification/>
            <TelegramBotPaySystem/>
            <TelegramBotUserEmotsional/>
            <TelegramBotAutoNotification/>
            <TelegramBotMarketing/>
            <TelegramBotGame/>
            <TelegramBotSpecialServices/>
            <TelegramBotAnalistic/>
        </div>
    );
};
