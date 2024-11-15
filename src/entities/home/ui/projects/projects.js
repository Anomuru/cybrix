import cls from "./projects.module.sass"
import {Button} from "../../../../shared/ui/button";
import vector from "shared/assets/img/Frame 26.svg"
import {useNavigate} from "react-router";
import {useContext, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeProject} from "../../model/thunk/projectThunk";
import {getHomeProject} from "../../model/selector/projectSelector";
import {API_URL_DOC} from "../../../../shared/api/base";
import defaultImg from "shared/assets/img/default.png"
import Slider from "react-slick"
import {Context} from "../../../../pages/homePage/ui/homePage";


export const Projects = () => {
    const navigate = useNavigate()
    const sectionRef = useRef()
    const {setSectionTop} = useContext(Context)
    useEffect(() => {
        setSectionTop(cur => ({...cur, projects: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeProject())
    }, [])

    const homeProjects = useSelector(getHomeProject)
    const renderProject = () => {
        return homeProjects?.map((item, i) => (
            <div key={i} className={cls.projects__box} onClick={() => navigate(`profile/${item.id}`)}>
                { item?.image[0]?.url?.length ? <img src={`${API_URL_DOC}${item?.image[0]?.url}`} alt=""/> : <img className={cls.projects__defImg} src={defaultImg} alt=""/>}
                <h2>{item?.name}</h2>
                <p>{item?.descr}</p>
            </div>
        ))
    }

    const settings = {
        infinite: false,
        // dots: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        className: cls.extraClass,
        arrows: false,
        // autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }

    return (
        <>
            <div className={cls.projects} ref={sectionRef}>
                <div className={cls.projects__header}>
                    <div className={cls.projects__title}>
                        Lets have a look at
                        <span>PROJECT</span>
                    </div>
                    {/*<Button extraClass={cls.projects__button}>See All</Button>*/}
                </div>
                <div className={cls.projects__wrapper}>
                    {renderProject()}
                    {/*<Slider {...settings}>*/}
                    {/*    */}
                    {/*</Slider>*/}
                </div>
            </div>
        </>
    );
};

