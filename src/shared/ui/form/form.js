import {memo} from 'react';
import classNames from "classnames";

import cls from "./form.module.sass"
import {MiniLoader} from "../loaderMini/loader";

export const Form = memo(({id, extraClassname, onSubmit, children, typeSubmit= "inside" , extraClassnameButton , loading}) => {
    return (
        <form
            id={id}
            className={classNames(cls.form, extraClassname)}
            onSubmit={onSubmit}
        >

            {children}

            {
                typeSubmit === "inside"
                    ?
                    loading ? <MiniLoader/> :
                    <input  value={"Tasdiqlash"} className={`${cls.submit} ${extraClassnameButton}`} type="submit"/>
                    :
                    null
            }

        </form>
    );
})