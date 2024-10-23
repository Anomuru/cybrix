import {useState} from "react";

import {TypeOrderAddModal} from "features/typeOrder";
import {ProjectsEditList} from "entities/typeOrder";

import cls from "./typeOrderPage.module.sass";

export const TypeOrderPage = () => {

    const [activeStatus, setActiveStatus] = useState(null)

    return (
        <div className={cls.typeOrder}>
            <div
                className={cls.typeOrder__plus}
                onClick={() => setActiveStatus("add")}
            >
                <i className={"fa fa-plus"}></i>
            </div>
            <ProjectsEditList/>
            <TypeOrderAddModal
                active={activeStatus === "add"}
                setActive={setActiveStatus}
            />
        </div>
    )
}
