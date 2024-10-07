import cls from "./category.module.sass"


import navigatorImg
    from "shared/assets/img/navigator-virtual-assistance-icon-illustration-vector-removebg-preview 1.svg"
import imagse from "shared/assets/img/images__1_-removebg-preview 1.svg"
import pc from "shared/assets/img/Без названия (5) 1.svg"
import arrowImg from "shared/assets/img/arrow-right-up-line.svg"
import {useState} from "react";

const data = [
    {
        title: "Telegram bot",
        descr: "Telegram botlari bizneslar uchun turli xil xizmatlar va imkoniyatlar taqdim etadi. " +
            "Ular mijozlar bilan oson va avtomatlashtirilgan aloqa o‘rnatishga, samaradorlikni " +
            "oshirishga va vaqtni tejashga yordam beradi.",
        img: navigatorImg,
        price: "100$-200$",
        id: 1
    },
    {
        title: "Dizayn",
        descr: "Dizaynerlar biznes uchun turli xil xizmatlarni taqdim etadilar, ular biznesning imidjini yaratish, mijozlarni jalb qilish va raqamli hamda bosma materiallarni ishlab chiqishda muhim rol o‘ynaydi.",
        img: imagse,
        price: "10$-200$",
        id: 2
    },
    {
        title: "Web app",
        descr: "Veb ilova (web app) — bu internet orqali ishlatiladigan dasturiy ta'minot turi bo‘lib, foydalanuvchilar " +
            "uni o‘zlarining brauzerlari orqali to‘g‘ridan-to‘g‘ri internetga ulangan holda foydalanadilar. Veb ilovalar jismoniy " +
            "qurilmalarga o‘rnatishni talab qilmaydi va turli platformalarda ishlaydi, masalan, kompyuter, planshet yoki smartfonlarda.",
        img: pc,
        price: "400$-600$",
        id: 3
    },
]
export const Category = () => {

    const [item, setItem] = useState(null)
    console.log(item)


    const renderData = () => {
        return data.map((item => (
            <div className={cls.category__box}>
                <div className={cls.category__box_title}>
                    {item.title}
                    <div onClick={() => setItem(item.id)} className={cls.category__img}>
                        <img src={arrowImg} alt=""/>
                    </div>
                </div>
                <div className={cls.category__box_descr}>
                    {item.descr}
                </div>
                <div className={cls.category__box_price}>
                    Narxi : <span>{item.price}</span>
                </div>
                <div className={cls.category__box_footerImg}>
                    <img src={item.img} alt=""/>
                </div>
            </div>
        )))
    }
    return (
        <div className={cls.category}>
            <div className={cls.category__wrapper}>
                <div className={cls.category__title}>
                    Category
                </div>
                <div className={cls.category__mainBox}>
                    {renderData()}
                </div>
            </div>
        </div>
    );
};

