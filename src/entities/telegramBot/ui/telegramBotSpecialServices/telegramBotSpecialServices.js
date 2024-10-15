import React from 'react';
import cls from './telegramBotSpecialServices.module.sass'
import managerImg from 'shared/assets/images/manager.svg'

export const TelegramBotSpecialServices = () => {
    return (
        <div className={cls.specialServices}>
            <img src={managerImg} alt=""/>
            <div className={cls.specialServices_contentBox}>
                <h1 className={cls.specialServices_contentBox_article}>
                    Maxsus xizmatlar
                </h1>
                <ul className={cls.specialServices_contentBox_listBox}>
                    <li className={cls.specialServices_contentBox_listBox_list}>
                        Botlar maxsus vazifalar uchun ishlab chiqilishi mumkin, masalan, tadbirlar uchun ro'yxatga
                        olish,
                    </li>
                    <li className={cls.specialServices_contentBox_listBox_list}>
                        Rezervatsiya qilish yoki maxsus maslahat berish xizmatlari ko'rsatish.
                    </li>
                </ul>
            </div>
        </div>
    );
};
