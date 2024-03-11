export const certificationsSlice = (set) => ({
  certTitle: "Educazione",
  id: Date.now(),
  certificationTitle: "",
  certificationAdress: "",
  certifications: [],
  updatecertTitle(value) {
    set((state) => ({
      ...state,
      certTitle: value,
    }));
  },
  updateCertTitle(value) {
    set((state) => ({
      ...state,
      certificationTitle: value,
    }));
  },
  updateCertAdress(value) {
    set((state) => ({
      ...state,
      certificationAdress: value,
    }));
  },

  addCertifications() {
    set((state) => ({
      certifications: [
        ...state.certifications,
        {
          id: state.id,
          certificationTitle: state.certificationTitle,
          certificationAdress: state.certificationAdress,
        },
      ],
      id: Date.now(),
      certificationTitle: "",
      certificationAdress: "",
    }));
  },
  removeCertifications(id) {
    set((state) => ({
      certifications: state.certifications.filter((c) => c.id !== id),
    }));
  },
  editCertification(value) {
    set((state) => ({
      ...state,
      certifications: value,
    }));
  },
});
