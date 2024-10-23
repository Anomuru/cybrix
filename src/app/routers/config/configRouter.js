import {ProjectsPage} from "pages/projectsPage";
import {Applications} from "pages/applications";
import {TypeOrderPage} from "pages/typeOrderPage";


export const routersConfig = [
    {
        name: "Applications",
        path: "applications",
        element : <Applications/>
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
    }

]
