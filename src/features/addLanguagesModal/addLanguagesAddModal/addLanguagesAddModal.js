import {Modal} from "shared/ui/modal";
import {AnimatedMulti} from "shared/ui/selectMulti/selectMulti";
import {useDispatch, useSelector} from "react-redux";
import {getLanguages} from "entities/addLanguage/model/selector/addLanguagesSelector";
import {useEffect, useState} from "react";
import {fetchLanguages} from "entities/addLanguage/model/thunk/addLanguagesThunk";
import cls from "../addLanguageModal.module.sass"
import {API_URL, headers, useHttp} from "shared/api/base";
import {Form} from "../../../shared/ui/form";
import {Input} from "../../../shared/ui/input";
import {useForm} from "react-hook-form";
import {onAddBase, onAddFrameworks, onAddLanguage} from "entities/addLanguage/model/slice/addLanguagesSlice";
import {Select} from "../../../shared/ui/select";

export const AddLanguagesAddModal = ({setActive, active}) => {

    const {register, setValue, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {request} = useHttp()


    const onSubmit = (data) => {
        request(`${API_URL}languages/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                dispatch(onAddLanguage(res))
                console.log(res , "log")

                setActive(false)

            })
    }


    return (
        <Modal setActive={setActive} active={active}>
            <h2>Add Language</h2>
            <Form  extraClassnameButton={cls.form__button} extraClassname={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <Input name={"name"} register={register} placeholder={"Language name"}/>
                <Input name={"icon"} register={register} placeholder={"Language image url"}/>
            </Form>
        </Modal>
    );
};

export const AddDataBaseAddModal = ({setActive, active}) => {
    const {register, setValue, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const onSubmit = (data) => {
        request(`${API_URL}database/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                console.log(res)
                dispatch(onAddBase(res))


            })
    }
    return (
        <Modal setActive={setActive} active={active}>
            <h2>Add Data Base</h2>
            <Form  extraClassnameButton={cls.form__button} extraClassname={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <Input name={"name"} register={register} placeholder={"Language name"}/>
                <Input name={"icon"} register={register} placeholder={"Language image url"}/>
            </Form>
        </Modal>
    );
};


export const AddFrameworksAddModal = ({setActive, active}) => {
    const {register, setValue, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [selectedLanguage , setSelectedLanguage] = useState(false)
    const language = useSelector(getLanguages)
    useEffect(() => {
        dispatch(fetchLanguages())
    } , [])
    const onSubmit = (data) => {
        const res ={
            ...data,
            language: selectedLanguage
        }
        request(`${API_URL}frameworks/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                console.log(res)
                dispatch(onAddFrameworks(res))
                setActive(false)

            })
    }
    return (
        <Modal setActive={setActive} active={active}>
            <h2>Add Frameworks</h2>
            <Form  extraClassnameButton={cls.form__button} extraClassname={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <Select onChangeOption={setSelectedLanguage} options={language} extraClass={cls.select}/>
                <Input name={"name"} register={register} placeholder={"Language name"}/>
                <Input name={"icon"} register={register} placeholder={"Language image url"}/>
            </Form>
        </Modal>
    );
};

