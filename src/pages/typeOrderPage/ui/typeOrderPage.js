import {useEffect, useState} from "react";

import {TypeOrderAddModal, TypeOrderEditModal} from "features/typeOrder";
import {fetchTypeOrderData, getTypeOrderData, ProjectsEditList} from "entities/typeOrder";

import cls from "./typeOrderPage.module.sass";
import {useDispatch, useSelector} from "react-redux";

export const TypeOrderPage = () => {

    const [activeStatus, setActiveStatus] = useState(null)
    const [active, setActive] = useState(false)
    const [activeId, setActiveId] = useState(false)

    const typeOrderData = useSelector(getTypeOrderData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTypeOrderData())
    } , [])




    return (
        <div className={cls.typeOrder}>
            <div
                className={cls.typeOrder__plus}
                onClick={() => setActiveStatus("add")}
            >
                <i className={"fa fa-plus"}></i>
            </div>
            <ProjectsEditList setActiveId={setActiveId} active={active} setActive={setActive} data={typeOrderData}/>
            <TypeOrderAddModal
                active={activeStatus === "add"}
                setActive={setActiveStatus}
            />

            <TypeOrderEditModal id={activeId} active={active} setActive={setActive}/>
        </div>
    )
}
