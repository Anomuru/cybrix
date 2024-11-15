import {Table} from "../../../shared/ui/table";
import {Button} from "../../../shared/ui/button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {onDeleteUserList} from "../model/slice/userListSlice";

export const UserList = ({data , setValue , setActiveModal , setActiveEditId}) => {

    const [deleteItem , setDelete] = useState(null)

    const dispatch = useDispatch()
    const onDelete  = (id) => {
        dispatch(onDeleteUserList(id))
    }

    const renderData = () => {
        return data.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td
                 onClick={() => {
                     setActiveModal(true)
                     setValue("name" , item.name)
                     setValue("surname" , item.surname)
                     setValue("age" , item.age)
                     setValue("job" , item.job)
                     setActiveEditId(item.id)
                 }}
                >{item.name} {item.surname}</td>
                <td>{item.age}</td>
                <td>{item.job}</td>
                <td>
                    <Button onClick={() => onDelete(item.id)}  type={"trash"} ><i className={"fa fa-times"}/></Button>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Full name</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {renderData()}
                </tbody>
            </Table>
        </div>
    );
};

