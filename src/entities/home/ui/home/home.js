import cls from "./home.module.sass"
import {Button} from "../../../../shared/ui/button/button";

export const Home = () => {
    return (
        <div className={cls.home}>
            <div className={cls.home__wrapper}>
                <div className={cls.home__title}>
                    Cybrix
                </div>
                <div className={cls.home__desrc}>
                    Dunyoni o‘zgartirishga tayyormisiz? Bizning jamoamiz innovatsion platformalarni yaratib, sizning
                    biznesingizni raqamli olamga olib chiqadi!
                </div>
                <div className={cls.home__button}>
                    <Button extraClass={cls.home__button}>Buyurtma berish</Button>
                </div>
            </div>
        </div>
    );
};

