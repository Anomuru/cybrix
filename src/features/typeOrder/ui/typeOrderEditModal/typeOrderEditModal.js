import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Form} from "shared/ui/form";


import cls from "./typeOrder.module.sass"
import classNames from "classnames";
import {Button} from "shared/ui/button";
import {API_URL, headers, useHttp} from "shared/api/base";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onAddTypeOrder, onDeleteTypeOrder, onEditTypeOrder} from "entities/typeOrder/model/slice/typeOrderSlice";
import {useState} from "react";
import {ConfirmModal} from "../../../../shared/ui/confirmModal/confirmModal";

export const TypeOrderEditModal = ({setActive, active, id}) => {

    const {request} = useHttp()
    const {register, handleSubmit, reset} = useForm()

    const [confirmModal, setConfirmModal] = useState(false)

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data, "data")
        request(`${API_URL}project-type/${id}/`, "PATCH", JSON.stringify(data), headers())
            .then(res => {
                dispatch(onEditTypeOrder({id: res.id, res}))
                console.log(res, "res")
                setActive(false)
                reset()
            })
            .catch(err => console.log(err))
    }

    const onDelete = () => {

        request(`${API_URL}project-type/${id}/`, "DELETE", null, headers())
            .then(res => {
                dispatch(onDeleteTypeOrder(id))
                console.log(res)
                setActive(false)
                reset()
            })
            .catch(err => console.log(err))
    }
    return (
        <Modal
            status={"dark"}
            setActive={setActive}
            active={active}
        >
            <h1>Edit</h1>
            <Form

                extraClassname={cls.addModal}
                typeSubmit={""}
            >
                <Input
                    extraClassName={cls.addModal__input}
                    name={"name"}
                    register={register}
                    placeholder={"Name"}
                />

                <textarea
                    className={classNames(cls.addModal__input, cls.addModal__text)}
                    {...register("description")}
                    placeholder={"Description"}
                />

                <div className={cls.main}>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        extraClass={cls.addModal__btn}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={handleSubmit(() => setConfirmModal(true))}
                        extraClass={cls.addModal__btnDelete}
                    >
                        Delete
                    </Button>
                </div>
            </Form>
            <ConfirmModal onClick={handleSubmit(onDelete)} active={confirmModal} setActive={setConfirmModal}/>
        </Modal>
    );
};

