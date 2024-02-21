export const linkSlice = (set) => ({
  linkedin: "",
  portfolio: "",
  github: "",
  updateLinkedin(value) {
    set((state) => ({
      ...state,
      linkedin: value,
    }));
  },
  updatePortfolio(value) {
    set((state) => ({
      ...state,
      portfolio: value,
    }));
  },
  updateGithub(value) {
    set((state) => ({
      ...state,
      github: value,
    }));
  },
});
