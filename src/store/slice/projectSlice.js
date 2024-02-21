export const projectSlice = (set) => ({
  id: Date.now(),
  projectName: "",
  projectDescriptions: "",
  projects: [],
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
});
