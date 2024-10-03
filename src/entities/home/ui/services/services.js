import cls from "./services.module.sass"
import servicesImg from "shared/assets/img/jjj 1.svg"

export const Services = () => {
    return (
        <div className={cls.services}>
            <div className={cls.services__title}>
                Xizmatlar
            </div>
            <div className={cls.services__wrapper}>
                <div>
                    <img src={servicesImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

