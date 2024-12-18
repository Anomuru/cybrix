import {memo} from "react";
import {useSelector} from "react-redux";

import {getProjectsData, getProjectsLoading} from "entities/projects/model/projectsSelector";
import {Table} from "shared/ui/table";

import cls from "entities/typeOrder/ui/projectsEditList/projectsEditList.module.sass";

export const ProjectsEditList = memo(({data , setActive , setActiveId}) => {

    // const data = useSelector(getProjectsData)
    const loading = useSelector(getProjectsLoading)

    const renderList = () => {
        // if (loading) return <TableSkeleton/>
        return data.map((item, index) => {
            return (
                <tr>
                    <td/>
                    <td>{item?.name}</td>
                    <td>
                        <div onClick={() => {
                            console.log(item, "item")
                            setActive(true)
                            setActiveId(item?.id)
                        }} className={cls.edit}>
                            <i className="fas fa-pen"/>
                            edit
                        </div>
                    </td>
                </tr>
            )
        })
    }

    const render = renderList()

    return (
        <div className={cls.list}>
            <Table>
                <thead>
                <tr>
                    <th/>
                    <th>Name</th>
                    <th>edit</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    )
})
