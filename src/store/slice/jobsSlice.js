export const createJobsSlice = (set) => ({
  jTitle: "Esperienze",
  id: Date.now(),
  jobTitle: "",
  company: "",
  from: "",
  to: "",
  adress: "",
  description: "",
  jChecked: false,
  jobs: [],
  updateJtitle(value) {
    set((state) => ({
      jTitle: value,
    }));
  },
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
  updateJChecked() {
    set((state) => ({
      jChecked: !state.jChecked,
    }));
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
          jChecked: state.jChecked,
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
  editJobs(value) {
    set((state) => ({
      ...state,
      jobs: value,
    }));
  },
});
