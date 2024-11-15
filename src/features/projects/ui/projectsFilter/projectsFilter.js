import {memo} from "react";

import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import cls from "./projectsFilter.module.sass";
import {useSelector} from "react-redux";
import {getProjectsTypesData} from "../../../../entities/projects/model/projectsSelector";

export const ProjectsFilter = memo(({active, setActive , typeOrder , setOt , setDo }) => {

    return (
        <Modal
            extraClass={cls.filter}
            active={active}
            setActive={setActive}
        >
            <h1>Filter</h1>
            <div className={cls.filter__container}>
                <Select
                    extraClass={cls.filter__select}
                    options={typeOrder}
                />
                <div className={cls.filter__inner}>
                    <Input
                        extraClassName={cls.filter__input}
                        placeholder={"Date (ot)"}
                        onChange={(e) => setOt(e.target.value)}
                    />
                    <Input
                        extraClassName={cls.filter__input}
                        placeholder={"Date (do)"}
                        onChange={(e) => setDo(e.target.value)}
                    />
                </div>
            </div>
        </Modal>
    )
})

