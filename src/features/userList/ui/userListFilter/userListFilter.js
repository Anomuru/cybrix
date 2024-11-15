import {Modal} from "../../../../shared/ui/modal";
import {Select} from "../../../../shared/ui/select";

const data =[
    {name: "dasds"},
    {name: "dasds"},
    {name: "dasds"},
    {name: "dasds"},
]

export const UserListFilter = ({setActive, active, type , extraClassSelect}) => {
    return (
        <Modal setActive={setActive} active={active} status={type}>
            <h2>
                Filter
            </h2>
            <Select options={data} title={"Job"} extraClass={extraClassSelect}/>

        </Modal>
    );
};

