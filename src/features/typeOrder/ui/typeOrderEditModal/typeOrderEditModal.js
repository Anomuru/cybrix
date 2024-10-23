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

export const TypeOrderEditModal = ({setActive, active, id}) => {

    const {request} = useHttp()
    const {register, handleSubmit, reset} = useForm()

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data, "data")
        request(`${API_URL}project-type/${id}/`, "PATCH", JSON.stringify(data), headers())
            .then(res => {
                dispatch(onEditTypeOrder({id: id , data}))
                console.log(res)
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

                <div className={cls.main}>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        extraClass={cls.addModal__btn}
                    >
                        Add
                    </Button>
                    <Button
                        onClick={handleSubmit(onDelete)}
                        extraClass={cls.addModal__btnDelete}
                    >
                        Delete
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

