export const styleSlice = (set) => ({
  titleColor: "text-red-800",
  subTitleColor: "text-red-400",
  brand: true,
  privacy: false,
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
  updateBrand() {
    set((state) => ({
      brand: !state.brand,
    }));
  },
  updatePrivacy() {
    set((state) => ({
      privacy: !state.privacy,
    }));
  },
});
