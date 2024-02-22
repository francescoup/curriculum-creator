export const createJobsSlice = (set) => ({
  id: Date.now(),
  jobTitle: "",
  company: "",
  from: "",
  to: "",
  adress: "",
  description: "",
  jobs: [],
  updateJobTitle(value) {
    set((state) => ({ ...state, jobTitle: value }));
  },
  updateCompany(value) {
    set((state) => ({ ...state, company: value }));
  },
  updateFrom(value) {
    set((state) => ({ ...state, from: value }));
  },
  updateTo(value) {
    set((state) => ({ ...state, to: value }));
  },
  updateAdress(value) {
    set((state) => ({ ...state, adress: value }));
  },
  updateDescription(value) {
    set((state) => ({ ...state, description: value }));
  },
  addJobs() {
    set((state) => ({
      jobs: [
        ...state.jobs,
        {
          id: state.id,
          jobTitle: state.jobTitle,
          company: state.company,
          from: state.from,
          to: state.to,
          adress: state.adress,
          description: state.description,
        },
      ],
      id: Date.now(),
      jobTitle: "",
      company: "",
      from: "",
      to: "",
      adress: "",
      description: "",
    }));
  },
  removeJobs(id) {
    set((state) => ({
      jobs: state.jobs.filter((j) => j.id !== id),
    }));
  },
});
