import cls from "./home.module.sass"
import {Button} from "../../../../shared/ui/button";
import {useContext, useEffect, useRef, useState} from "react";
import {Modal} from "../../../../shared/ui/modal";
import {Input} from "../../../../shared/ui/input";
import {Textarea} from "../../../../shared/ui/textarea/textarea";
import {Form} from "../../../../shared/ui/form";
import {useForm} from "react-hook-form";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {useDispatch} from "react-redux";
import {onAddAlertOptions} from "../../../../features/alert/model/slice/alertSlice";
import {Context} from "pages/homePage/ui/homePage";

export const Home = () => {
    const {setSectionTop} = useContext(Context)
    const [active, setActive] = useState(false)

    const {reset, register, handleSubmit, setValue} = useForm()
    const sectionRef = useRef()

    useEffect(() => {
        setSectionTop(cur => ({...cur, home: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])



    const dispatch = useDispatch()
    const {request} = useHttp()
    const onPostDate = (data) => {

        request(`${API_URL}client-requests/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                console.log(res)
                setActive(false)
                reset()
                dispatch(onAddAlertOptions({
                    status: "success",
                    type: true,
                    msg: res.msg
                }))

            })
            .catch(err => {
                setActive(false)
                console.log(err)
                dispatch(onAddAlertOptions({
                    status: "error",
                    type: true,
                    msg: "Serverda hatolik"
                }))
            })
    }
    return (
        <div className={cls.home} ref={sectionRef}>
            <div className={cls.home__wrapper}>
                <div className={cls.home__title}>
                    Cybrix
                </div>
                <div className={cls.home__desrc}>
                    Dunyoni o‘zgartirishga tayyormisiz? Bizning jamoamiz innovatsion platformalarni yaratib, sizning
                    biznesingizni raqamli olamga olib chiqadi!
                </div>
                <div className={cls.home__button}>
                    <Button onClick={() => setActive(!active)} extraClass={cls.home__button}>Buyurtma berish</Button>
                </div>
            </div>


            <Modal extraClass={cls.modal} setActive={setActive} active={active}>
                <h2>Contact Information</h2>
                <div className={cls.formcontainer}>
                    <Form extraClassname={cls.form} onSubmit={handleSubmit(onPostDate)}>

                        <div className={cls.formgroup}>
                            <div className={cls.formfield}>
                                <label>Name</label>
                                <Input register={register} name={"name"}/>
                            </div>
                            <div className={cls.formfield}>
                                <label>Surname</label>
                                <Input register={register} name={"surname"}/>

                            </div>
                        </div>
                        <div className={cls.formgroup}>
                            <div className={cls.formfield}>
                                <label>Telegram</label>
                                <Input register={register} name={"telegram_username"}/>

                            </div>
                            <div className={cls.formfield}>
                                <label>Phone Number</label>
                                <Input type={"number"} register={register} name={"phone_number"}/>

                            </div>
                        </div>
                        <div className={`${cls.formfield} ${cls.fullwidth}`}>
                            <label>Message</label>
                            <Textarea extraClassName={cls.textarea} register={register} name={"message"}/>
                        </div>
                    </Form>
                </div>

            </Modal>

        </div>
    );
};

