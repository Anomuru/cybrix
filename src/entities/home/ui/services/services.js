import cls from "./services.module.sass"
import servicesImg from "shared/assets/img/jjj 1.svg"
import {useContext, useEffect, useRef} from "react";
import {Context} from "pages/homePage/ui/homePage";

export const Services = () => {

    const sectionRef = useRef()
    const {setSectionTop} = useContext(Context)
    useEffect(() => {
        setSectionTop(cur => ({...cur, about_us: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    return (
        <div className={cls.services} ref={sectionRef}>
            <div className={cls.services__title}>
                Xizmatlar
            </div>
            <div className={cls.services__wrapper}>
                <div className={cls.services__img}>
                    <img src={servicesImg} alt=""/>
                </div>

                <div className={cls.services__list}>
                    <div className={`${cls.services__wrapper_title} ${cls.services__title}`}>
                        Xizmatlar
                    </div>
                    <ul>
                        <li>
                            <span>1</span>
                            <div>
                                <h2>Responsive dizayn</h2>
                                <p>Ilovangiz barcha qurilmalarda (kompyuter, planshet, telefon) birdek mukammal ishlaydi.</p>
                            </div>
                        </li>
                        <li>
                            <span>2</span>
                            <div>
                                <h2>SEO-optimallashtirilgan</h2>
                                <p>Saytingiz qidiruv tizimlarida yuqori o‘rinlarni egallaydi.</p>
                            </div>
                        </li>
                        <li>
                            <span>3</span>
                            <div>
                                <h2>Yuqori tezlik va xavfsizlik</h2>
                                <p>Tez ishlovchi va xavfsiz tizim yaratishga e'tibor qarataman.</p>
                            </div>
                        </li>
                        <li>
                            <span>4</span>
                            <div>
                                <h2>Foydalanuvchi tajribasi</h2>
                                <p>Ilovangiz qulay va intuitiv foydalanishga ega bo'ladi.</p>
                            </div>
                        </li>
                        <li  className={cls.services__list_box}>
                            <span>5</span>
                            <div>
                                <h2>Custom yechimlar</h2>
                                <p>Sizning talablarga moslashtirilgan maxsus funksiyalar va dizaynlar.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

