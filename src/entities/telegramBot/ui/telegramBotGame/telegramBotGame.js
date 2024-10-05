import React from 'react';
import cls from './telegramBotGame.module.sass'
import gameImg from 'shared/assets/images/gameImg.svg'
export const TelegramBotGame = () => {
    return (
        <div className={cls.game}>
            <div className={cls.game_contentsBox}>
                <h1 className={cls.game_contentsBox_article}>
                    O'yinlar va musobaqalar
                </h1>
            </div>

            <div className={cls.game_contentBox}>
                <img src={gameImg} alt=""/>
            </div>
            <div className={cls.game_contentBox}>
                <p className={cls.game_contentBox_paragraph}>
                    Botlar orqali mijozlar bilan o'yinlar yoki musobaqalar tashkil qilib, ularning jalb qilinishini
                    oshirish mumkin. Bu turdagi interaktivlar mijozlarning e'tiborini tortishning yaxshi usulidir.
                </p>
            </div>
        </div>
    );
};
