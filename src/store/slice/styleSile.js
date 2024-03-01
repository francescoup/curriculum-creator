export const styleSlice = (set) => ({
  titleColor: "",
  subTitleColor: "",
  updateColorTitle(value) {
    set((state) => ({
      ...state,
      titleColor: value,
    }));
  },
  updateColorSubTitle(value) {
    set((state) => ({
      ...state,
      subTitleColor: value,
    }));
  },
});
