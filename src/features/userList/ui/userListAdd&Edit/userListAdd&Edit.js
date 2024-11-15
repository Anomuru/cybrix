import {Modal} from "../../../../shared/ui/modal";
import {Input} from "../../../../shared/ui/input";

import cls from "../userListFilter.module.sass"
import {useDropzone} from "react-dropzone";
import defaultImage from "../../../../shared/assets/img/default.png";
import {API_URL_DOC} from "../../../../shared/api/base";
import {useCallback, useEffect, useState} from "react";
import {Form} from "../../../../shared/ui/form";
import {Select} from "../../../../shared/ui/select";
import {useDispatch} from "react-redux";
import {onAddUserList, onEditUserList} from "../../../../entities/userList/model/slice/userListSlice";
import {useForm} from "react-hook-form";

const job = [
    {name: "works", id: 1},
    {name: "works", id: 2},
    {name: "works", id: 3},
    {name: "works", id: 4},
]
export const UserListAdd = ({activeAdd, setActiveAdd, type}) => {
    const [dropzones, setDropzones] = useState();
    const [selectedJob, setSelectedJob] = useState();

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const onAdd = (data) => {
        const newData = {
            ...data,
            job: selectedJob,
            id: new Date().getTime()
        }

        setActiveAdd(false)
        dispatch(onAddUserList(newData))
        reset()
    }


    return (
        <Modal status={type} setActive={setActiveAdd} active={activeAdd}>
            <div className={cls.form}>
                <ImageDrop

                    image={dropzones?.images}
                    setChangedImages={setDropzones}

                />
                <Form onSubmit={handleSubmit(onAdd)} extraClassnameButton={cls.button}>
                    <Input placeholder={"Name"} register={register} name={"name"} title={"Name"}/>
                    <Input title={"Surname"} placeholder={"Surname"} name={"surname"} register={register}/>
                    <Input title={"Birthday"} type={"date"} name={"age"} register={register}/>
                    <Select options={job} onChangeOption={setSelectedJob} title={"Job"}/>
                    {/*<Input type={"file"} title={"File"} register={register} name={"file"}/>*/}
                </Form>
            </div>
        </Modal>
    );
};

const ImageDrop = ({index, setChangedImages, image, status}) => {
    useEffect(() => {
        if (status) {
            setImg({})
        }
    }, [status])

    const [img, setImg] = useState({})
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setImg(acceptedFiles[0])
            setChangedImages(acceptedFiles[0])
        }
    })

    const ImageRender = useCallback(({img, image}) => {
        return (
            img?.path ? <img src={URL.createObjectURL(img)} alt=""/>
                : status ? <>
                    <i className="far fa-image"/>

                    <input
                        required
                        type="file"
                        {...getInputProps()}
                    />
                </> : image?.url ? <img className={cls.img} src={image.url} alt=""/> : <>
                    <i className="far fa-image"/>
                    <input

                        type="file"
                        {...getInputProps()}
                    />
                </>
        )
    }, [img, image])

    return (
        <div
            className={cls.items__item}
            {...getRootProps()}
        >
            <ImageRender
                img={img}
                image={image}
            />
        </div>
    )
}


export const UserListEdit = ({activeModal, register, handleSubmit, setActiveModal, setValue, activeEditId}) => {


    const dispatch = useDispatch()
    const [dropzones, setDropzones] = useState();

    const onEdit = (data) => {
        const dataUser = {
            ...data,
            id: activeEditId
        }
        dispatch(onEditUserList(dataUser))
        setActiveModal(false)
    }

    return (
        <Modal status={"dark"} setActive={setActiveModal} active={activeModal}>
            <div className={cls.form}>
                <ImageDropEdit

                    // image={dropzones?.images}
                    setChangedImages={setDropzones}

                />
                <Form onSubmit={handleSubmit(onEdit)} extraClassnameButton={cls.button}>
                    <Input placeholder={"Name"} register={register} name={"name"} title={"Name"}/>
                    <Input title={"Surname"} placeholder={"Surname"} name={"surname"} register={register}/>
                    <Input title={"Birthday"} type={"date"} name={"age"} register={register}/>
                    {/*<Select options={job} onChangeOption={setSelectedJob} title={"Job"}/>*/}
                    {/*<Input type={"file"} title={"File"} register={register} name={"file"}/>*/}
                </Form>
            </div>
        </Modal>
    );
};


const ImageDropEdit = ({index, setChangedImages, image, status}) => {
    useEffect(() => {
        if (status) {
            setImg({})
        }
    }, [status])

    const [img, setImg] = useState({})
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setImg(acceptedFiles[0])
            setChangedImages(acceptedFiles[0])
        }
    })

    const ImageRender = useCallback(({img, image}) => {
        return (
            img?.path ? <img src={URL.createObjectURL(img)} alt=""/>
                : status ? <>
                    <i className="far fa-image"/>

                    <input
                        required
                        type="file"
                        {...getInputProps()}
                    />
                </> : image?.url ? <img className={cls.img} src={image.url} alt=""/> : <>
                    <i className="far fa-image"/>
                    <input

                        type="file"
                        {...getInputProps()}
                    />
                </>
        )
    }, [img, image])

    return (
        <div
            className={cls.items__item}
            {...getRootProps()}
        >
            <ImageRender
                img={img}
                image={image}
            />
        </div>
    )
}
