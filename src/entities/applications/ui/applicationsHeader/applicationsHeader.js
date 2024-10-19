import cls from "../applications.module.sass"
import {useState} from "react";
import classNames from "classnames";


export const ApplicationsHeader = ({item , setActive, active}) => {


    return (
        <div className={cls.header}>
            {item.map((item , i) => (
                <div className={classNames(cls.header_item , {
                    [cls.active] : active === item.name
                })} onClick={() => setActive(item.name)}>
                    <i className={item.img}/>  {item.label}
                </div>
            ))}
        </div>
    );
};

