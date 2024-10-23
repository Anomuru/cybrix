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


    const {request} = useHttp()
    const onPost = (data) => {

        request(`${API_URL}client-requests/${activeModalID.id}/`, "PATCH", JSON.stringify({
            data,
            status: selected
        }), headers())
            .then(res => {
                console.log(res)
                setValue("comment" , "")
                setActiveModal(false)
                setSelected(null)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(data, selected)
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
                <Form extraClassnameButton={cls.button} onSubmit={handleSubmit(onPost)}>
                    <Textarea extraClassName={cls.button} register={register} name={"comment"}/>
                    {renderTable()}
                </Form>
            </Modal>

        </>
    );
};

