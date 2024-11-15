import cls from "../addLanguage.module.sass"
import {useForm} from "react-hook-form";
import {useState} from "react";

import {FramworksModal} from "../../../../features/addLanguagesModal";

export const Frameworkslist = ({frameworks}) => {


    const {setValue , register , handleSubmit} = useForm()

    const [activeModal , setActiveModal] = useState(false)
    const [activeItem , setActiveItem] = useState(null)
    const renderLan = () => {
        return frameworks?.map((item, i) => (
            <div className={cls.box}
                 onClick={() => {
                     setActiveModal(true)
                     setActiveItem(item)
                     setValue("name" , item.name)
                     setValue("icon" , item.icon)
                 }}
            >
                <img src={item?.icon} alt=""/>
                <h2>
                    {item?.name}
                </h2>
            </div>
        ))
    }
    const render = renderLan()

    return (
        <div className={cls.wrapper}>
            {render}

            <FramworksModal register={register} handleSubmit={handleSubmit} setActive={setActiveModal} activeItem={activeItem} active={activeModal}/>
        </div>
    );
};

