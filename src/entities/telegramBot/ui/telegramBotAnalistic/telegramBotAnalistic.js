import React from 'react';
import cls from './telegramBotAnalistic.module.sass'
import statisticImg from 'shared/assets/images/static_1.svg'
import statisticImgSecond from 'shared/assets/images/static_2.svg'

export const TelegramBotAnalistic = () => {
    return (
        <div className={cls.analistic}>
            <h1 className={cls.analistic_article}>
                Analitika va hisobotlar
            </h1>
            <div className={cls.analistic_contentBox}>
                <img src={statisticImg} alt=""/>
                <p className={cls.analistic_contentBox_paragraph}>
                    <b>Telegram botlari</b> mijozlarning faolligi va o'zaro aloqalari haqida ma'lumot to'playdi. Bu esa
                    bizneslarga mijozlar xatti-harakatlarini tahlil qilish va kelajakdagi strategiyalarini yaxshiroq
                    rejalashtirish imkonini beradi.
                </p>
            </div>
            <div className={cls.analistic_contentBox}>
                <p className={cls.analistic_contentBox_paragraph}>
                    <b>Telegram botlari</b> biznesga mijozlar bilan oson va samarali tarzda muloqot qilish imkonini
                    beradi, avtomatlashtirilgan jarayonlar orqali resurslarni tejaydi va xizmatlar sifatini oshiradi.
                </p>
                <img src={statisticImgSecond} alt=""/>
            </div>
        </div>
    );
};
