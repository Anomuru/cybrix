
export const getProjectsData = (state) =>
    state.projectsSlice.data
export const getProjectsTypesData = (state) =>
    state.projectsSlice.typeProject
export const getProjectsLoading = (state) =>
    state.projectsSlice.loading

export const getProjectLanguages = (state) =>
    state.projectsSlice.typeLanguages

export const getProjectDatabase = (state) =>
    state.projectsSlice.database

export const getProjectsError = (state) =>
    state.projectsSlice.error
