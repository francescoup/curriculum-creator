export const personalInfoSlice = (set) => ({
  id: Date.now(),
  fullName: "",
  profileTitle: "",
  email: "",
  phone: "",
  profileAdress: "",
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
});
