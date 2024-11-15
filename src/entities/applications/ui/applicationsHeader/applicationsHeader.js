import cls from "../applications.module.sass"
import {useState} from "react";
import classNames from "classnames";


export const ApplicationsHeader = ({item , setActive, active}) => {

    return (
        <div className={cls.header}>
            {item.map((item , i) => (
                <div className={classNames(cls.header_item , {
                    [cls.active] : active === item.name
                })} onClick={() => setActive(prev => prev === item.name ? null : item.name)}>
                    <i className={item.img}/>  {item.label}
                </div>
            ))}
        </div>
    );
};

