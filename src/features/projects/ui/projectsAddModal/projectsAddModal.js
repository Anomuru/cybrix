import {memo, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {API_URL, headers, headersImg, useHttp} from "shared/api/base";
import {Button} from "shared/ui/button";

import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Modal} from "shared/ui/modal";
import {Select} from "shared/ui/select";

import cls from "./projectsAddModal.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {getTypeOrderData} from "../../../../entities/typeOrder";
import {onAddProject} from "../../../../entities/projects/model/projectsSlice";


import {useDropzone} from 'react-dropzone';


import defaultImage from 'shared/assets/img/default.png';
import {fetchProjectsTypeData, fetchLanguages, fetchDatabases} from "../../../../entities/projects/model/projectsThunk";
import {
    getProjectDatabase,
    getProjectLanguages,
    getProjectsTypesData
} from "../../../../entities/projects/model/projectsSelector";
import classNames from "classnames";
import {AnimatedMulti} from "../../../../shared/ui/selectMulti/selectMulti";



export const ProjectsAddModal = memo(({active, setActive}) => {

    const {request} = useHttp()

    const {register, handleSubmit, reset} = useForm()

    const [select, setSelected] = useState(null)

    const dispatch = useDispatch()

    const [activeDropzone, setActiveDropZone] = useState(false)
    const [activeDropzoneId, setActiveDropZoneId] = useState(false)
    const typeOrder = useSelector(getProjectsTypesData)
    const typeLanguages = useSelector(getProjectLanguages)
    const databases = useSelector(getProjectDatabase)

    const [dropzones, setDropzones] = useState([{id: Date.now(), files: [defaultImage]}]);
    const formData = new FormData()

    const [changeFramework, setChangeFramework] = useState([])
    const [language, setLanguages] = useState(null)
    const [frameworks, setFrameworks] = useState(null)
    const [databaseSelect, setSelectedDataBase] = useState(null)

    const languages = typeLanguages.map(item => ({
        value: item?.id,
        label: item?.name,
        icon: item?.icon
    }))

    const framework = frameworks?.map(item => ({
        value: item?.id,
        label: item?.name,
    }))
    const database = databases?.map(item => ({
        value: item?.id,
        label: item?.name,

    }))

    useEffect(() => {
        dispatch(fetchProjectsTypeData())
        dispatch(fetchLanguages())
        dispatch(fetchDatabases())
    }, [])


    const handleAddDropzone = () => {
        setDropzones([...dropzones, {id: Date.now(), files: [defaultImage]}]);
    };

    const handleDrop = (index, acceptedFiles) => {
        const newDropzones = dropzones.slice();
        newDropzones[index].files = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        setDropzones(newDropzones);
    };





    const changeSelect = (value) => {
        const optiLanguage = value.map(item => item.value);
        setLanguages(optiLanguage);

        // const languagesString = JSON.stringify(optiLanguage);

        request(`${API_URL}frameworks/?language=${JSON.stringify(optiLanguage)}`, "GET", null, headers())
            .then(res => {
                setFrameworks(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // const changeFrameworks = (value) => {
    //     const optiLanguage = value.map(item => (
    //         item.value
    //     ))
    //     request(`${API_URL}frameworks/?language=${optiLanguage}`, "GET", null, headers())
    //         .then(res => {
    //             setFrameworks(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }


    const optiFrem = changeFramework.map(item => (
        item.value
    ))
    const databaseOpti = databaseSelect?.map(item => (
        item.value
    ))

    const onSubmit = (data) => {


        const res = {
            ...data,
            project_type: select,
            language: language,
            framework: optiFrem,
            database: databaseOpti


        }
        request(`${API_URL}project/`, "POST", JSON.stringify(res), headers())

            .then(res => {
                dispatch(onAddProject(res))
                setActiveDropZoneId(res ? res : null)
                reset()
                setActive(false)
                setActiveDropZone(true)
            })
            .catch(err => console.log(err))
    }


    const clickDropzone = () => {
        for (let i = 0; i < dropzones.length; i++) {
            const formData = new FormData()
            formData.append(`file`, dropzones[i].files[0])
            formData.append("project", activeDropzoneId.id)

            request(`${API_URL}project-documents/`, "POST", formData, headersImg())
                .then(res => {
                    reset()
                    console.log(res)
                    setActiveDropZone(false)
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>

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
                    <Input
                        extraClassName={cls.addModal__input}
                        placeholder={"Project linki"}
                        title={"Project linki"}
                        register={register}
                        name={"project_url"}
                    />
                    <textarea
                        className={classNames(cls.addModal__input, cls.addModal__text)}
                        {...register("description")}
                        placeholder={"Description"}
                    />
                    <Select
                        options={typeOrder}
                        onChangeOption={setSelected}
                        extraClass={cls.addModal__select}
                        title={"Type order"}
                        defaultValue={typeOrder[0]?.id}
                    />
                    <AnimatedMulti
                        onChange={setSelectedDataBase}
                        extraClass={cls.addModal__selectMulti}
                        options={database}
                    />
                    <AnimatedMulti
                        onChange={changeSelect}
                        extraClass={cls.addModal__selectMulti}
                        options={languages}
                    />
                    {frameworks ? <AnimatedMulti
                        onChange={setChangeFramework}
                        extraClass={cls.addModal__selectMulti}
                        options={framework}
                    /> : null}
                    {/*<Select*/}
                    {/*    options={typeLanguages}*/}
                    {/*    onChangeOption={setSelectedLanguages}*/}
                    {/*    extraClass={cls.addModal__select}*/}
                    {/*    defaultValue={typeLanguages[0]?.name}*/}
                    {/*    title={"Language"}*/}
                    {/*/>*/}


                    <Input
                        register={register}
                        name={"finishing_date"}
                        type={"date"}
                        extraClassName={cls.addModal__input}
                        title={"Finishing date"}
                    />
                    <Button extraClass={cls.addModal__btn}>
                        Add
                    </Button>
                </Form>
            </Modal>
            <Modal
                status={"dark"}
                extraClass={cls.addModal}
                active={activeDropzone}
                setActive={setActiveDropZone}
            >

                <div className={cls.addModal_form}>
                    <Form
                        onSubmit={handleSubmit(clickDropzone)}
                        typeSubmit={""}
                    >
                        <div className={cls.dropzone_div}>
                            <div className={cls.filter}>
                                <div className={cls.filterHandler}>
                                    {dropzones?.map((dropzone, index) => (
                                        <DropzoneComponent
                                            key={dropzone?.id}
                                            index={index}
                                            files={dropzone?.files}
                                            onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <Button extraClass={cls.plusButton} onClick={handleSubmit(handleAddDropzone)}>+</Button>
                            <Button extraClass={cls.addModal__btn}>
                                Add
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    )
})


const DropzoneComponent = ({index, files, onDrop}) => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop
    });

    return (
        <div {...getRootProps({className: cls.dropzone})}>
            <input {...getInputProps()} />
            {files?.length > 0 && files[0] !== defaultImage ? (
                <div className={cls.imagesContainer}>
                    {files?.map((file, i) => (
                        <img key={i} src={file?.preview} alt={`preview ${i}`} className={cls.imagePreview}/>
                    ))}
                </div>
            ) : (
                <div className={cls.placeholder}>
                    <img src={defaultImage} alt="Default" className={cls.defaultImage}/>
                </div>
            )}
        </div>
    );
};

