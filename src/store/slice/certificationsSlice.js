export const certificationsSlice = (set) => ({
  id: Date.now(),
  certificationTitle: "",
  certificationAdress: "",
  certifications: [],
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
});
