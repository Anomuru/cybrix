import cls from "../applications.module.sass"
import {Button} from "shared/ui/button/button";

import {useState} from "react";

export const Disagree = ({data}) => {


    const formatSalary = (phone_number) => {
        const cleaned = ('' + phone_number).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
        }
        return phone_number;
    };

    const [activeModal, setActiveModal] = useState(false)
    const [activeModalID , setActiveModalId] = useState(null)

    const renderApplicationsData = () => {
        return data.map((item, i) => (
            <div className={cls.boxItem}>
                <h2>{item.surname} {item.name}</h2>
                <h3>
                    +998 {formatSalary(item.phone_number)}
                </h3>

                <a href={`tel:${item.phone_number}`}>
                    <Button onClick={() => {
                        setActiveModalId(item)
                        setActiveModal(!activeModal)
                    }}><i className={"fa fa-phone"}/> Contact</Button>
                </a>

            </div>
        ))
    }

    const render = renderApplicationsData()

    return (
        <div className={cls.box}>
            {render}
        </div>
    );
};

