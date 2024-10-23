import {useState} from 'react';
import {Outlet, Route, Routes, useNavigate} from "react-router";

import {Button} from "shared/ui/button";
import {ProjectsList} from "entities/projects";
import {ProjectsFilter, ProjectsAddModal} from "features/projects";
import {Header} from "widgets/header";

import cls from "./projectsPage.module.sass";

export const ProjectsPage = () => {

    const navigate = useNavigate()
    const [activeFilter, setActiveFilter] = useState(false)
    const [activeAddModal, setActiveAddModal] = useState(false)

    return (
        <div className={cls.projectsPage}>
            <Header
                setActiveFilter={() => setActiveFilter(true)}
                setActiveAdd={() => setActiveAddModal(true)}
            />
            <Button
                extraClass={cls.projectsPage__btn}
                onClick={() => navigate("typeOrder")}
            >
                Type order
            </Button>
            <ProjectsList/>
            {/*<ProjectsEditList/>*/}
            {/*<div>*/}
            {/*    <Outlet/>*/}
            {/*    <Routes>*/}
            {/*        <Route*/}
            {/*            index*/}
            {/*            element={<ProjectsList/>}*/}
            {/*        />*/}
            {/*        <Route*/}
            {/*            path={"edit"}*/}
            {/*            element={<ProjectsEditList/>}*/}
            {/*        />*/}
            {/*    </Routes>*/}
            {/*</div>*/}
            <ProjectsFilter
                active={activeFilter}
                setActive={setActiveFilter}
            />
            <ProjectsAddModal
                active={activeAddModal}
                setActive={setActiveAddModal}
            />
        </div>
    )
}
