import {memo} from 'react';
import {useSelector} from "react-redux";

import {getProjectsData, getProjectsLoading} from "../../model/projectsSelector";
import {TableSkeleton} from "shared/ui/tableSkeleton";
import {Table} from "shared/ui/table";

import cls from "./projectsList.module.sass";

export const ProjectsList = memo(() => {

    const data = useSelector(getProjectsData)
    const loading = useSelector(getProjectsLoading)

    const renderList = () => {
        // if (loading) return <TableSkeleton/>
        return data.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.added_date}</td>
                    <td>{item?.finished_date}</td>
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
                    <th>No</th>
                    <th>Name</th>
                    <th>Added date</th>
                    <th>Finishing date</th>
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    )
})
