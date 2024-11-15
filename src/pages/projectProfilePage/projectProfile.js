import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileData} from "../../entities/projectProfile/model/thunk/projectThunk";
import {useNavigate, useParams} from "react-router";
import cls from "./projectProfile.module.sass"
import {getData} from "../../entities/projectProfile/model/selector/projectSelector";
import {API_URL_DOC} from "../../shared/api/base";
import defImf from "shared/assets/img/default.png"
import {Button} from "../../shared/ui/button";

export const ProjectProfile = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileData(id))
    }, [])

    const data = useSelector(getData)

    const navigate = useNavigate()

    return (


        <div className={cls.projectProfile__main}>

            <Button extraClass={cls.projectProfile__btn} onClick={() => navigate(-1)}>
                Back
            </Button>
            <div className={cls.projectProfile}>

                <div className={cls.projectProfile__wrapper}>
                    <div className={cls.projectProfile__img}>
                        {data?.image?.length ? <img src={`${API_URL_DOC}${data.image[0].url}`} alt=""/> :
                            <img src={defImf} alt=""/>}
                    </div>
                    <div className={cls.projectProfile__info}>
                        <h2>{data.name}</h2>
                        <span>
                        {data.description}
                    </span>
                        <div className={cls.projectProfile__frameworks}>
                            <ul>
                                <li>database : <div className={cls.li_in}>
                                    {data?.database?.map(item => (

                                        <>
                                            {/*<img src={item.icon} alt=""/>*/}
                                            <span>{item.name}</span>
                                        </>

                                    ))}
                                </div>
                                </li>
                                <li>Frameworks :
                                    <div className={cls.li_in}>
                                        {data?.framework?.map(item => (

                                            <>
                                                {/*<img src={item.icon} alt=""/>*/}
                                                <span>{item.name}</span>
                                            </>

                                        ))}
                                    </div>
                                </li>
                        </ul>
                    </div>
                    <div className={cls.footer}>
                        <ul>
                            {/*<li>*/}
                            {/*    <i className="fab fa-instagram" style={{color: "#ffffff"}}/> <a href="https://www.instagram.com/genniscampus/" target={"_blank"}>@GENNISCAMPUS</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <i className="fab fa-telegram" style={{color: "#ffffff"}}/> <a href="https://t.me/gennis_info" target={"_blank"}>@GENNIS_INFO</a>*/}
                            {/*</li>*/}
                            <li>
                                <i className="fas fa-globe" style={{color: "#ffffff"}}/><a href="https://gennis.uz/"
                                                                                           target={"_blank"}>@GENNISCAMPUS</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</div>

)
    ;
};

