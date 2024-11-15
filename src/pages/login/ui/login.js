import React, {useState} from "react";


import {Input} from "shared/ui/input";
import cls from "./login.module.sass"
import logo from "shared/assets/img/Cybrix logo.svg"
import {Form} from "../../../shared/ui/form/form";
import {useForm} from "react-hook-form";
import {Button} from "shared/ui/button/button";
import {Switch} from "../../../shared/ui/switch/switch";
import {API_URL, headers, useHttp} from "../../../shared/api/base";
import {useDispatch} from "react-redux";
import {getUserData} from "../model/slice/loginSlice";
import {useNavigate} from "react-router";
import {onAddAlertOptions} from "../../../features/alert/model/slice/alertSlice";
import {Alert} from "../../../features/alert";


export const Login = () => {

    const [error, setError] = useState(false)

    const [loading  ,setLoading] = useState(false)
    const {register, setValue, handleSubmit} = useForm()
    const {request} = useHttp()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onClick = (data) => {
        // request(`${API_URL}token/`, "POST", JSON.stringify(data), headers())
        //     .then(res => {
        //         dispatch(getUserData(res))
        //         navigate("/platform")
        //         setLoading(true)
        //     })
        //     .catch(err => {
        //         setValue("username", "")
        //         setValue("password", "")
        //         setError(true)
        //         // dispatch(onAddAlertOptions({
        //         //     status: "error",
        //         //     type: true,
        //         //     msg: "Serverda hatolik"
        //         // }))
        //     })
    }

    return (


        <div className={cls.container}>
            <Alert/>

            <img className={cls.box__img} src={logo} alt=""/>

            <div className={cls.box__form}>
                {error ? <h2 className={cls.h2}>Username yoki parol xato kiritilgan</h2> :  null}
                <Form loading={loading} extraClassnameButton={cls.button} onSubmit={handleSubmit(onClick)}>


                    <Input
                        title={"Username"}
                        register={register}
                        name={"username"}
                        type="text"
                        required/>


                    <Input
                        title={"Password"}
                        register={register}
                        name={"password"}
                        type="password"
                        required/>
                    {/*<div className={cls.middle}>*/}
                    {/*    <div className={cls.switch}>*/}
                    {/*        <Switch/>*/}
                    {/*        <span>Remember me</span>*/}
                    {/*    </div>*/}
                    {/*    <div className={cls.forget}>*/}
                    {/*        Forget password ?*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </Form>
            </div>

        </div>
    )
}