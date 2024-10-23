import {Application, ApplicationsHeader, fetchApplications, getApplicationsData} from "entities/applications";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import cls from "./applications.module.sass"
import {Filter} from "./applicationsFilterItem/filter";
import {
    fetchApplicationsAgree,
    fetchApplicationsDisagree
} from "../../../entities/applications/model/thunk/applicationThunk";


const item =[
    {name: "agree" , label: "Kelishildi", img: "fa fa-check"},
    {name: "disagree" , label: "Kelishilmadi" , img: "fa fa-times"},
]
export const Applications = () => {

    const [active, setActive] = useState()
    const dispatch = useDispatch()
    const data = useSelector(getApplicationsData)
    useEffect(() => {
        dispatch(fetchApplications())
    }, [])

    useEffect(() => {
        if (active === "agree"){
            dispatch(fetchApplicationsAgree())
        }else if (active === "disagree") {
            dispatch(fetchApplicationsDisagree())
        }
    } , [active])

    return (
        <div className={cls.main}>

            <ApplicationsHeader item={item} setActive={setActive} active={active}/>
            {active ? <Filter active={active}/> : <Application data={data}/>}
        </div>
    );
};

