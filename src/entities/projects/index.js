export {ProjectsHeader} from "./ui/projectsHeader/projectsHeader";
export {ProjectsList} from "./ui/projectsList/projectsList";

export {default as projectsSlice} from "./model/projectsSlice";
export {
    getProjectsData,
    getProjectsLoading,
    getProjectsError
} from "./model/projectsSelector";
