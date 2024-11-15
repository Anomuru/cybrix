import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Button} from "shared/ui/button";
import cls from "./projectModal.module.sass"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {onDeleteProject, onEditProject} from "entities/projects/model/projectsSlice";
import {API_URL, API_URL_DOC, headers, headersImg, useHttp} from "shared/api/base";
import {ConfirmModal} from "shared/ui/confirmModal/confirmModal";
import {useEffect, useState} from "react";
import {Textarea} from "shared/ui/textarea/textarea";
import {Select} from "shared/ui/select";
import {getProjectDatabase, getProjectLanguages, getProjectsTypesData} from "entities/projects/model/projectsSelector";
import {onAddAlertOptions} from "../../../alert/model/slice/alertSlice";
import {useDropzone} from "react-dropzone";
import defaultImage from "shared/assets/img/default.png";
import {AnimatedMulti} from "shared/ui/selectMulti/selectMulti";
import {fetchDatabases, fetchLanguages} from "entities/projects/model/projectsThunk";

export const ProjectModal = ({setActive, active, activeEditItem, typeOrder, handleSubmit, register, reset}) => {
    const typeLanguages = useSelector(getProjectLanguages)
    const [confirmModal, setConfirmModal] = useState(false)
    const [selected, setSelected] = useState(null)
    const databases = useSelector(getProjectDatabase)


    const [changeFramework, setChangeFramework] = useState([])
    const [language, setLanguages] = useState(null)
    const [frameworks, setFrameworks] = useState(null)
    const dispatch = useDispatch()

    const [dropzones, setDropzones] = useState([{id: Date.now(), files: [defaultImage]}]);
    const [activeDropzone, setActiveDropZone] = useState(false)
    const [databaseSelect, setSelectedDataBase] = useState(null)

    const formData = new FormData()

    useEffect(() => {
        dispatch(fetchLanguages())
        dispatch(fetchDatabases())
    } , [])
    const database = databases?.map(item => ({
        value: item?.id,
        label: item?.name,

    }))

    const handleAddDropzone = () => {
        setDropzones([...dropzones, {id: Date.now(), files: [defaultImage]}]);
    };
    const handleRemoveDropzone = () => {
        setDropzones(dropzones.slice(0, -1));
    };
    const handleDrop = (index, acceptedFiles) => {
        const newDropzones = dropzones.slice();
        newDropzones[index].files = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        setDropzones(newDropzones);
    };

    const {request} = useHttp()

    const optiFrem = changeFramework.map(item => (
        item.value
    ))
    const databaseOpti = databaseSelect?.map(item => (
        item.value
    ))

    const onClickEdit = (data) => {

        const res = {
            ...data,
            project_type: Number(selected),
            language: language,
            framework: optiFrem,
            database: databaseOpti
        }
        request(`${API_URL}project/${activeEditItem.id}/`, "PATCH", JSON.stringify(res), headers())
            .then(res => {
                dispatch(onEditProject({id: activeEditItem.id, data: res}))
                // setActiveDropZone(true)
                dispatch(onAddAlertOptions({
                    status: "success",
                    type: true,
                    msg: `${activeEditItem.name} changed successfully`
                }))
                setActive(false)
            })
            .catch(err => {
                console.log(err)
                setActive(false)

                dispatch(onAddAlertOptions({
                    status: "error",
                    type: true,
                    msg: "Serverda hatolik"
                }))
            })
    }
    const onClickDelete = (data) => {
        request(`${API_URL}project/${activeEditItem.id}/`, "DELETE", null, headers())
            .then(res => {
                dispatch(onDeleteProject({id: activeEditItem.id, data: data}))
                setActive(false)
                setConfirmModal(false)
                dispatch(onAddAlertOptions({
                    status: "success",
                    type: true,
                    msg: res.message
                }))
            })
            .catch(err => {
                console.log(err)
            })

    }

    const clickDropzone = () => {
        for (let i = 0; i < dropzones.length; i++) {
            const formData = new FormData()
            formData.append(`file`, dropzones[i].files[0])
            formData.append("project", activeEditItem.id)


            request(`${API_URL}project-documents/${activeEditItem?.image[0]?.id}/`, "PATCH", formData, headersImg())
                .then(res => {
                    reset()
                    console.log(res)
                    setActiveDropZone(false)
                })
                .catch(err => console.log(err))
        }

    }


    const changeSelect = (value) => {
        const optiLanguage = value.map(item => (
            item.value
        ))
        setLanguages(optiLanguage)
        request(`${API_URL}frameworks/?language=${JSON.stringify(optiLanguage)}`, "GET", null, headers())

            .then(res => {
                setFrameworks(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const languages = typeLanguages.map(item => ({
        value: item?.id,
        label: item?.name,
        icon: item?.icon
    }))

    const framework = frameworks?.map(item => ({
        value: item?.id,
        label: item?.name,
        icon: item?.icon
    }))
    return (

        <>
            <Modal status={"dark"} active={active} setActive={setActive}>
                {activeEditItem.name}
                <Form extraClassname={cls.form} typeSubmit={""}>
                    <div>
                        <Input
                            extraClassName={cls.input}
                            title={"Name"}
                            register={register}
                            name={"name"}
                            // value={activeEditItem.name}
                        />
                        <Input
                            extraClassName={cls.input}
                            placeholder={"Project linki"}
                            title={"Project linki"}
                            register={register}
                            name={"project_url"}
                        />
                        <Input
                            extraClassName={cls.input}
                            title={"Finishing Date"}
                            type={"date"}
                            name={"finishing_date"}
                            register={register}
                            // value={activeEditItem.finishing_date}
                        />

                        <Textarea
                            // value={activeEditItem.description}
                            extraClassName={cls.textarea}
                            name={"description"}
                            register={register}
                        />
                        <Select
                            defaultValue={activeEditItem.project_type}
                            extraClass={cls.select}
                            options={typeOrder}
                            onChangeOption={setSelected}
                        />
                        <AnimatedMulti
                            onChange={setSelectedDataBase}
                            extraClass={cls.selectMulti}
                            options={database}
                        />
                        <AnimatedMulti
                            onChange={changeSelect}
                            extraClass={cls.selectMulti}
                            options={languages}
                        />
                        {frameworks ? <AnimatedMulti
                            onChange={setChangeFramework}
                            extraClass={cls.selectMulti}
                            options={framework}
                        /> : null}

                    </div>
                </Form>
                <div className={cls.footerBtn}>
                    <Button onClick={handleSubmit(() => setActiveDropZone(true))} type={"confirm"}>Change Image</Button>
                    <Button onClick={handleSubmit(onClickEdit)} type={"confirm"}>Confirm</Button>
                    <Button onClick={handleSubmit(() => setConfirmModal(true))} type={"danger"}>Delete</Button>
                </div>
                <ConfirmModal setActive={setConfirmModal} active={confirmModal} onClick={handleSubmit(onClickDelete)}/>
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
                                            img={activeEditItem}
                                            onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={cls.buttonMain}>
                                {dropzones.length > 3 ? <Button extraClass={cls.plusButton} disabled onClick={handleSubmit(handleAddDropzone)}>+</Button> : <Button extraClass={cls.plusButton} onClick={handleSubmit(handleAddDropzone)}>+</Button>}
                                {dropzones.length <2 ? <Button extraClass={cls.plusButton} disabled onClick={handleSubmit(handleRemoveDropzone)}>-</Button> : <Button extraClass={cls.plusButton}  onClick={handleSubmit(handleRemoveDropzone)}>-</Button>}
                            </div>
                            <Button extraClass={cls.addModal__btn}>
                                Add
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

const DropzoneComponent = ({index, files, onDrop, img }) => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop
    });

    return (
        <div {...getRootProps({ className: cls.dropzone })}>
            <input {...getInputProps()} />
            {files?.length > 0 && files[0] !== defaultImage ? (
                <div className={cls.imagesContainer}>
                    {files?.map((file, i) => (
                        <img key={i} src={file?.preview} alt={`preview ${i}`} className={cls.imagePreview} />
                    ))}
                </div>
            ) : (
                <div className={cls.placeholder}>
                    {img?.image?.url?.length ? (
                        <img
                            src={`${API_URL_DOC}${img?.image[0]?.url}`}
                            alt="Default"
                            className={cls.defaultImage}
                        />
                    ) : (
                        <img src={defaultImage} alt="Default" className={cls.defaultImage} />
                    )}
                </div>
            )}
        </div>
    );
};
