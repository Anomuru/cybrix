import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    Application,
    ApplicationsHeader,
    fetchApplications,
    getApplicationsData
} from "entities/applications";

import cls from "./applications.module.sass"

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

    return (
        <div className={cls.main}>
            <ApplicationsHeader item={item} setActive={setActive} active={active}/>
            <Application data={data}/>
        </div>
    );
};

