import classNames from "classnames";
import {memo} from "react";
import {useForm} from "react-hook-form";

import {API_URL, headers, useHttp} from "shared/api/base";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Button} from "shared/ui/button";

import cls from "./typeOrderAddModal.module.sass";
import {useDispatch} from "react-redux";
import {onAddTypeOrder} from "../../../../entities/typeOrder/model/slice/typeOrderSlice";

export const TypeOrderAddModal = memo(({active, setActive}) => {

    const {request} = useHttp()
    const {register, handleSubmit , reset} = useForm()

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data, "data")
        request(`${API_URL}project-type/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                dispatch(onAddTypeOrder(res))


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
            <h1>Add</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
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
                <Button
                    extraClass={cls.addModal__btn}
                >
                    Add
                </Button>
            </Form>
        </Modal>
    )
})
