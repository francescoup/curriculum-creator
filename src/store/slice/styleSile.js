export const styleSlice = (set) => ({
  titleColor: "text-red-800",
  subTitleColor: "text-red-400",
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
