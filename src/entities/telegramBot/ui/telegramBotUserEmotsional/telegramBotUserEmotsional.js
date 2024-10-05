import React from 'react';
import cls from './telegramBotUserEmtsional.module.sass'
import firstCardImg from 'shared/assets/images/userEmot_1.svg'
import secondCardImg from 'shared/assets/images/userEmot_2.svg'

export const TelegramBotUserEmotsional = () => {
    return (
        <div className={cls.userEmotsional}>
            <div className={cls.userEmotsional_headerBox}>
                <h1 className={cls.userEmotsional_headerBox_headerArticle}>
                    Mijoz fikrlarini yig‘ish
                </h1>
            </div>
            <div className={cls.userEmotsional_cardsBox}>
                <div className={cls.userEmotsional_cardsBox_card}>
                    <img src={firstCardImg} alt=""/>
                    <p className={cls.userEmotsional_cardsBox_card_paragraph}>
                        So‘rovlar va formalar yordamida bizneslar mijozlar ehtiyojlarini aniqlash va xizmatlarini
                        yaxshilash uchun kerakli ma'lumotlarni olishadi.
                    </p>
                </div>
                <div className={cls.userEmotsional_cardsBox_card}>
                    <img src={secondCardImg} alt=""/>
                    <p className={cls.userEmotsional_cardsBox_card_paragraph}>
                        Botlar orqali mijozlar tajribasi va mahsulotlar haqidagi fikrlarni yig‘ish mumkin.
                    </p>
                </div>
            </div>
        </div>
    );
};
