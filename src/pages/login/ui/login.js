import React, {useState} from "react";


import {Input} from "shared/ui/input";
import cls from "./login.module.sass"
import logo from "shared/assets/img/Cybrix logo.svg"
import {Form} from "../../../shared/ui/form/form";
import {useForm} from "react-hook-form";
import {Button} from "shared/ui/button/button";
import {Switch} from "../../../shared/ui/switch/switch";


export const Login = () => {

    const [activeSwitch , setActiveSwitch] = useState(null)

    const {register, handleSubmit} = useForm()
    return (


        <div className={cls.container}>

            <img className={cls.box__img} src={logo} alt=""/>
            <div className={cls.box__form}>
                <Form extraClassnameButton={cls.button}>
                    <Input
                        title={"Login"}
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
                   <div className={cls.middle}>
                       <div className={cls.switch}>
                           <Switch onChangeSwitch={setActiveSwitch} activeSwitch={activeSwitch}/>
                           <span>Remember me</span>
                       </div>
                       <div className={cls.forget}>
                           Forget password ?
                       </div>
                   </div>
                </Form>
            </div>

        </div>



        // <div className={cls.container}
        //     <div className={cls.login}>
        //         <div className={cls.login__boxes}>
        //             <div className={cls.login__box}>
        //
        //                             <div className={cls.box__header_img}>
        //                                 <img src={logo} alt=""/>
        //                             </div>
        //                             <h1 className={cls.box__header_title}>
        //                                 login
        //                             </h1>
        //                 <div className={cls.box__form}>
        //                             <Form>
        //
        //                                         <Input
        //                                             onChange={(e) => setInputChange(e.target.value)}
        //                                             title={"username"}
        //                                             register={register}
        //                                             name={"username"}
        //                                             type="text"
        //                                             required/>
        //
        //
        //                                         <Input
        //                                             title={"password"}
        //                                             register={register}
        //                                             name={"password"}
        //                                             type="password"
        //                                             required/>
        //
        //                                     <Button extraClass={cls.login__btn}>Login</Button>
        //                             </Form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    )
}