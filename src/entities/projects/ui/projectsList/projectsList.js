import {memo} from 'react';
import {useSelector} from "react-redux";

import {getProjectsData, getProjectsLoading} from "../../model/projectsSelector";
import {Table} from "shared/ui/table";

import cls from "./projectsList.module.sass";

export const ProjectsList = memo(({setActiveEdit, setActiveEditItem, data, setValue}) => {

    const loading = useSelector(getProjectsLoading)

    const renderList = () => {
        // if (loading) return <TableSkeleton/>
        return data.map((item, index) => {
            return (
                <tr onClick={() => {
                    setActiveEdit(true)
                    setActiveEditItem(item)
                    setValue("name", item.name)
                    setValue("description", item.description)
                    setValue("finishing_date", item.finishing_date)
                    setValue("project_url", item.project_url)

                }}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.registered_at}</td>
                    <td>{item?.finishing_date}</td>
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
                    {/*<th> </th>*/}
                </tr>
                </thead>
                <tbody>
                {render}
                </tbody>
            </Table>
        </div>
    )
})
