export const projectSlice = (set) => ({
  proTitle: "Progetti",
  id: Date.now(),
  projectName: "",
  projectDescriptions: "",
  projects: [],
  updateProTitle(value) {
    set((state) => ({
      ...state,
      proTitle: value,
    }));
  },
  updateProjectName(value) {
    set((state) => ({ ...state, projectName: value }));
  },
  updateProjectDescriptions(value) {
    set((state) => ({ ...state, projectDescriptions: value }));
  },
  addProject() {
    set((state) => ({
      projects: [
        ...state.projects,
        {
          id: state.id,
          projectName: state.projectName,
          projectDescriptions: state.projectDescriptions,
        },
      ],
      id: Date.now(),
      projectName: "",
      projectDescriptions: "",
    }));
  },
  removeProjects(value) {
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== value),
    }));
  },
  editProject(value) {
    set((state) => ({
      ...state,
      projects: value,
    }));
  },
});
