import {createPortal} from 'react-dom';
import classNames from 'classnames';
import React, {memo} from 'react';
import cls from "./modal.module.sass";


export const Modal = memo(({children, active, setActive, extraClass, type = "simple", status}) => {

    const onClick = (target) => {
        if (target && typeof target.className === 'string') {
            if (target.className.includes('outClose') || target.className.includes('innerClose')) {
                setActive(false);
            }
        }
    };

    if (active) {

        if (type === "simple") {
            return (


                createPortal(
                    <div
                        className={classNames(cls.modal, "outClose")}
                        onClick={(e) => onClick(e.target)}
                    >
                        <div className={classNames(cls.modal__inner, extraClass, {
                            [cls.dark]: status === "dark"
                        })}>
                            {/*<img*/}
                            {/*    className={classNames(cls.modal__close, "innerClose")}*/}
                            {/*    onClick={(e) => onClick(e.target)}*/}
                            {/*    src={"ko"}*/}
                            {/*    alt=""*/}
                            {/*/>*/}
                            <i
                                className={classNames(cls.modal__close, "innerClose", "fas fa-times")}
                                onClick={(e) => onClick(e.target)}
                            />
                            {children}
                        </div>
                    </div>
                    ,
                    document.body
                )
            );
        }


        return (
            createPortal(
                <div
                    className={classNames(cls.modal, "outClose")}
                    onClick={(e) => onClick(e.target)}
                >
                    {children}
                </div>,
                document.body
            )
        );
    }
    return null;
})