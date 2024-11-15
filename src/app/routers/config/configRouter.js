import {ProjectsPage} from "pages/projectsPage";
import {Applications} from "pages/applications";
import {TypeOrderPage} from "pages/typeOrderPage";
import {AddLanguages} from "../../../pages/addLanguages";
import {UserListPage} from "../../../pages/userListPage";


export const routersConfig = [
    {
        name: "Applications",
        path: "applications",
        element: <Applications/>
    },
    {
        path: "userslist",
        element: <UserListPage/>
    },
    {
        name: "Projects",
        path: "projects",
        element: <ProjectsPage/>
    },
    {
        name: "Type Order",
        path: "projects/typeOrder",
        element: <TypeOrderPage/>,
    },
    {
        path: "addLanguage",
        element: <AddLanguages/>,
    },

]
