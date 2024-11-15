import {Header} from "widgets/header";
import cls from "./userListPage.module.sass"
import {useSelector} from "react-redux";
import {getUserData, UserList} from "entities/userList";
import {useState} from "react";
import {UserListAdd, UserListEdit, UserListFilter} from "../../../features/userList";
import {useForm} from "react-hook-form";

export const UserListPage = () => {

    const userList = useSelector(getUserData)

    const [activeFilter, setActiveFilter] = useState(false)
    const [activeAdd, setActiveAdd] = useState(false)
    const [term, setTerm] = useState('');

    const {register , handleSubmit , setValue} = useForm()

    const [activeModal , setActiveModal] = useState(false)

    const [activeEditId , setActiveEditId] = useState(null)

    const searchEmp = (items, term) => {
        if (term.length === 0) return items;
        return items.filter(item => item.name.includes(term));
    };
    const onUpdateSearch = (term) => {
        setTerm(term);
    };
    const visibleData = searchEmp(userList, term)
    return (
        <div className={cls.userList}>
            <Header onUpdateSearch={onUpdateSearch} setActiveFilter={setActiveFilter} setActiveAdd={setActiveAdd}/>
            <UserList setActiveEditId={setActiveEditId} data={visibleData} setActiveModal={setActiveModal}  setValue={setValue}/>
            <UserListFilter extraClassSelect={cls.userList__select}
                            setActive={setActiveFilter} active={activeFilter} type={"dark"}/>
            <UserListAdd type={"dark"} setActiveAdd={setActiveAdd} activeAdd={activeAdd} />
            <UserListEdit activeEditId={activeEditId} setActiveModal={setActiveModal} register={register} setValue={setValue} handleSubmit={handleSubmit} activeModal={activeModal} />
        </div>
    );
};

