import {memo} from "react";
import {useForm} from "react-hook-form";
import {API_URL, headers, useHttp} from "shared/api/base";
import {Button} from "shared/ui/button";

import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import cls from "./projectsAddModal.module.sass";

export const ProjectsAddModal = memo(({active, setActive}) => {

    const {request} = useHttp()
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data, "data")
        request(`${API_URL}`, "POST", JSON.stringify(data), headers())
            .then(res => console.log(res, "success"))
            .catch(err => console.log(err))
    }

    return (
        <Modal
            status={"dark"}
            extraClass={cls.addModal}
            active={active}
            setActive={setActive}
        >
            <h1>Type order</h1>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                extraClassname={cls.addModal__container}
                typeSubmit={""}
            >
                <Input
                    extraClassName={cls.addModal__input}
                    placeholder={"Enter your name"}
                    title={"Name"}
                    register={register}
                    name={"name"}
                />
                <Select
                    extraClass={cls.addModal__select}
                    title={"Type order"}
                />
                <Input
                    type={"date"}
                    extraClassName={cls.addModal__input}
                    title={"Finishing date"}
                />
                <Button extraClass={cls.addModal__btn}>
                    Add
                </Button>
            </Form>
        </Modal>
    )
})
