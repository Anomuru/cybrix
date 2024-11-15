import {useNavigate} from "react-router";
import {Button} from "../../../../shared/ui/button";
import cls from "../addLanguage.module.sass"

export const AddLanguageHeader = ({setActive , setActiveBase ,  setActiveFrameworks}) => {

    const navigate = useNavigate()
    return (
        <div className={cls.header}>
            <Button  onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left"></i>
                Back
            </Button>
            <div className={cls.header__btn}>
                <Button  onClick={() => setActive(true)}>
                    Add Language
                </Button>
                <Button  onClick={() => setActiveFrameworks(true)}>
                    Add Frameworks
                </Button>
                <Button  onClick={() => setActiveBase(true)}>
                    Add Data Base
                </Button>
            </div>
        </div>
    );
};

