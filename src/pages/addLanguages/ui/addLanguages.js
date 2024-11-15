import {AddLanguageHeader, AddLanguageList, BaseList, Frameworkslist} from "entities/addLanguage";
import cls from "./addLanguage.module.sass"
import {useEffect, useState} from "react";
import {AddLanguagesAddModal} from "features/addLanguagesModal";
import {
    AddDataBaseAddModal,
    AddFrameworksAddModal
} from "features/addLanguagesModal/addLanguagesAddModal/addLanguagesAddModal";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchDatabase,
    fetchFrameworks,
    fetchLanguages
} from "../../../entities/addLanguage/model/thunk/addLanguagesThunk";
import {Select} from "../../../shared/ui/select";


const lists = [
    {name: "Language" , label: " language"},
    {name: "Frameworks" , label: " frameworks"},
    {name: "Data Base" , label: " database"}
]



export const AddLanguages = () => {
    const [active, setActive] = useState(false)
    const [activeFrameworks, setActiveFrameworks] = useState(false)
    const [activeBase, setActiveBase] = useState(false)

    const [select , setSelected] = useState(lists[0].name)

    const dispatch = useDispatch()

    const filter = () => {
        if (select === "Language"){
            return <AddLanguageList language={languages} />
        }else if (select === "Frameworks" ){
            return <Frameworkslist   frameworks={frameworks}/>
        }else {
            return  <BaseList base={database}/>
        }
    }

    console.log(select)

    const {database , frameworks , languages} = useSelector(state => state.addLanguageSlice)
    useEffect(() => {
        dispatch(fetchFrameworks())
        dispatch(fetchDatabase())
        dispatch(fetchLanguages)

    }, [])

    return (
        <div className={cls.language}>
            <AddLanguageHeader setActiveFrameworks={setActiveFrameworks} setActive={setActive}
                               setActiveBase={setActiveBase}/>

            <div>
                <Select defaultValue={lists[0].name} onChangeOption={setSelected} options={lists}/>

                {filter()}
            </div>

            <AddLanguagesAddModal setActive={setActive} active={active}/>
            <AddDataBaseAddModal setActive={setActiveBase} active={activeBase}/>
            <AddFrameworksAddModal setActive={setActiveFrameworks} active={activeFrameworks}/>
        </div>
    );
};

