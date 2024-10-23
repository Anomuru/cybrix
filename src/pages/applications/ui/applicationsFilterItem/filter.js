import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    fetchApplicationsAgree,
    fetchApplicationsDisagree
} from "entities/applications/model/thunk/applicationThunk";
import {
    getApplicationsAgreeData,
    getApplicationsDisagreeData
} from "entities/applications/model/selector/applicationSelector";
import {Agree} from "entities/applications/ui/agree/agree";
import {Disagree} from "../../../../entities/applications/ui/disagree/disagree";

export const Filter = ({active}) => {

    const dispatch = useDispatch()
    const AgreeData = useSelector(getApplicationsAgreeData)
    const disagree = useSelector(getApplicationsDisagreeData)


    return (
        <div style={{color: "white"}}>

            {active === "agree" ? <Agree data={AgreeData}/> : <Disagree data={disagree}/>}
        </div>
    );
};

