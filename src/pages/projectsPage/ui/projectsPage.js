import {useEffect, useState} from 'react';
import {Outlet, Route, Routes, useNavigate} from "react-router";

import {Button} from "shared/ui/button";
import {getProjectsData, ProjectsList} from "entities/projects";
import {ProjectsFilter, ProjectsAddModal, ProjectModal} from "features/projects";
import {Header} from "widgets/header";

import cls from "./projectsPage.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjectsData, fetchProjectsTypeData} from "entities/projects/model/projectsThunk";
import {getProjectsTypesData} from "entities/projects/model/projectsSelector";
import {useForm} from "react-hook-form";

export const ProjectsPage = () => {

    const navigate = useNavigate()
    const [activeFilter, setActiveFilter] = useState(false)
    const [activeAddModal, setActiveAddModal] = useState(false)
    const {reset, register, handleSubmit , setValue} = useForm();
    const [activeEdit, setActiveEdit] = useState(false)
    const [activeEditItem, setActiveEditItem] = useState(false)
    const typeOrder = useSelector(getProjectsTypesData)
    const [ot, setOt] = useState(null)
    const [doo, setDo] = useState(null)

    const data = useSelector(getProjectsData)
    const [term, setTerm] = useState('');


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProjectsData())
    }, [])


    const searchEmp = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => item.name.includes(term));
    };
    const onUpdateSearch = (term) => {
        setTerm(term);
    };
    const visibleData = searchEmp(data, term)
    return (
        <div className={cls.projectsPage}>
            <Header
                onUpdateSearch={onUpdateSearch}
                setActiveFilter={() => setActiveFilter(true)}
                setActiveAdd={() => setActiveAddModal(true)}
            />
            <Button
                extraClass={cls.projectsPage__btn}
                onClick={() => navigate("typeOrder")}
            >
                Type order
            </Button>
            <ProjectsList setValue={setValue} data={visibleData} setActiveEdit={setActiveEdit} setActiveEditItem={setActiveEditItem}/>
            <ProjectsFilter
                setDo={setDo}
                setOt={setOt}
                typeOrder={typeOrder}
                active={activeFilter}
                setActive={setActiveFilter}
            />
            <ProjectsAddModal
                active={activeAddModal}
                setActive={setActiveAddModal}
            />
            <ProjectModal reset={reset} register={register} handleSubmit={handleSubmit} typeOrder={typeOrder} setActive={setActiveEdit} active={activeEdit}
                          activeEditItem={activeEditItem}/>
        </div>
    )
}
