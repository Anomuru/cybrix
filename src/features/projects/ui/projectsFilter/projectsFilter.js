import {memo} from "react";

import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import cls from "./projectsFilter.module.sass";

export const ProjectsFilter = memo(({active, setActive}) => {
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
                />
                <div className={cls.filter__inner}>
                    <Input
                        extraClassName={cls.filter__input}
                        placeholder={"Date (ot)"}
                    />
                    <Input
                        extraClassName={cls.filter__input}
                        placeholder={"Date (do)"}
                    />
                </div>
            </div>
        </Modal>
    )
})

