export const personalInfoSlice = (set) => ({
  id: Date.now(),
  stepTitle: "Informazioni personali",
  files: "",
  showImages: true,
  fullName: "",
  profileTitle: "",
  email: "",
  phone: "",
  profileAdress: "",
  updateFiles(value) {
    set((state) => ({
      ...state,
      files: URL.createObjectURL(value),
    }));
  },
  updateImages() {
    set((state) => ({
      showImages: !state.showImages,
      files: "",
    }));
  },
  updateName(value) {
    set((state) => ({ ...state, fullName: value }));
  },
  updateProfileTitle(value) {
    set((state) => ({ ...state, profileTitle: value }));
  },
  updateEmail(value) {
    set((state) => ({ ...state, email: value }));
  },
  updatePhone(value) {
    set((state) => ({ ...state, phone: value }));
  },
  updateProfileAdress(value) {
    set((state) => ({ ...state, profileAdress: value }));
  },
  updateStepTitle(value) {
    set((state) => ({ stepTitle: value }));
  },
});
