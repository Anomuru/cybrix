import {Modal} from "../../../shared/ui/modal";

import {Input} from "../../../shared/ui/input";
import {Form} from "../../../shared/ui/form";
import {Button} from "../../../shared/ui/button";
import {API_URL, headers, useHttp} from "../../../shared/api/base";
import {useDispatch} from "react-redux";
import {onDelete, onUpdate} from "../../../entities/addLanguage/model/slice/addLanguagesSlice";
import {ConfirmModal} from "../../../shared/ui/confirmModal/confirmModal";
import {useState} from "react";


export const AddLanguageEditDelete = ({setActive, active, activeItem, register, handleSubmit}) => {
    const {request} = useHttp()
    const [activeConfirm , setActiveConfirm] = useState(false)

    const dispatch = useDispatch()
    const onAdd = (data) => {
        request(`${API_URL}languages/${activeItem.id}/`, "PATCH", JSON.stringify(data), headers())
            .then(res => {
                console.log(res)
                setActive(false)
                dispatch(onUpdate({id: activeItem.id, data: res}))
            })
    }
    const onDeleteLan = () => {

        request(`${API_URL}languages/${activeItem.id}`, "DELETE", null, headers())
            .then(res => {
                console.log(res)
                dispatch(onDelete(activeItem.id))
                setActiveConfirm(false)
                setActive(false)
            })
    }

    return (
        <Modal setActive={setActive} active={active}>
            <h2 style={{marginBottom: "10px"}}>Change Language</h2>
            <Form typeSubmit={""}>
                <Input name={"name"} register={register}/>
                <Input name={"icon"} register={register}/>

                <div style={{justifyContent: "flex-end", display: "flex", gap: "2rem"}}>
                    <Button onClick={handleSubmit(onAdd)} type={"confirm"}>Confirm</Button>
                    <Button onClick={handleSubmit(() => setActiveConfirm(true))} type={"danger"}>Delete</Button>
                </div>
            </Form>
            <ConfirmModal onClick={onDeleteLan} active={activeConfirm} setActive={setActiveConfirm}/>
        </Modal>
    );
};

