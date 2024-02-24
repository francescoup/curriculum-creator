export const linkSlice = (set) => ({
  linkTitle: "Link personali",
  linkedin: "",
  portfolio: "",
  github: "",
  updateLinkTitle(value) {
    set((state) => ({
      ...state,
      linkTitle: value,
    }));
  },
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
