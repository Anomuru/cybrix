import cls from "../applications.module.sass"
import {useForm} from "react-hook-form";
import {Form} from "shared/ui/form/form";
import {Textarea} from "shared/ui/textarea/textarea";
import {Radio} from "shared/ui/radio/radio";
import {Modal} from "../../../../shared/ui/modal/modal";
import {useState} from "react";
import {getCLS} from "web-vitals";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {isAllOf} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";


const list = [
    {name: true, label: "Agree"},
    {name: false, label: "Dissatisfied"},
]
export const ApplicationsModal = ({activeModal, setActiveModal, activeModalID}) => {
    const {handleSubmit, register , setValue} = useForm()

    const [selected, setSelected] = useState(null)

    const onChange = (value) => {
        setSelected(value)
    }


    const dispatch = useDispatch()
    const {request} = useHttp()
    const onPost = (data) => {

        request(`${API_URL}client-requests/${activeModalID.id}/`, "PATCH", JSON.stringify({
            data,
            status: selected
        }), headers())
            .then(res => {
                dispatch(onAddAlertOptions({
                    type: true,
                    status: "success",
                    msg: res.msg

                }))
                console.log(res)
                setValue("comment" , "")
                setActiveModal(false)
                setSelected(null)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const renderTable = () => {
        return list.map(item => (
            <div className={cls.radio}>
                <Radio
                    onChange={() => onChange(item.name)}
                    checked={selected === item.name}
                    children={item.label}

                />
            </div>
        ))
    }
    return (
        <>

            <Modal extraClass={cls.modal} active={activeModal} setActive={setActiveModal}>
                <h2>Comment</h2>
                <Form extraClassnameButton={cls.button} extraClassname={cls.form} onSubmit={handleSubmit(onPost)}>
                    <Textarea extraClassName={cls.button} register={register} name={"comment"}/>
                    {renderTable()}
                </Form>
            </Modal>

        </>
    );
};

