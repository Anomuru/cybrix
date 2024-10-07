import cls from "./projects.module.sass"
import {Button} from "../../../../shared/ui/button/button";
import vector from "shared/assets/img/Frame 26.svg"
import {useNavigate} from "react-router";


const data = [
    {name : "Gennis Project" , img: vector , descr: "Qadoqlash dizayni: Mahsulotlar uchun jalb qiluvchi va funksional qadoqlash dizaynlarini yaratish.Qadoqlash dizayni."},
    {name : "Gennis Project" , img: vector , descr: "Qadoqlash dizayni: Mahsulotlar uchun jalb qiluvchi va funksional qadoqlash dizaynlarini yaratish.Qadoqlash dizayni."},

]

export const Projects = () => {
    const navigate = useNavigate()

    const renderProject = () => {
        return data.map((item, i) => (
            <div key={i} className={cls.projects__box} onClick={() => navigate(`design`)}>
                <img src={item.img} alt=""/>
                <h2>{item.name}</h2>
                <p>{item.descr}</p>
            </div>
        ))
    }
    return (
        <>
            <div className={cls.projects}>
                <div className={cls.projects__header}>
                    <div className={cls.projects__title}>
                        Lets have a look at
                        <span>PROJECT</span>
                    </div>
                    <Button extraClass={cls.projects__button}>See All</Button>
                </div>
                <div className={cls.projects__wrapper}>
                    {renderProject()}
                </div>
            </div>
        </>
    );
};

