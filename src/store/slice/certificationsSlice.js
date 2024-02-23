export const certificationsSlice = (set) => ({
  eTitle: "Educazione",
  id: Date.now(),
  certificationTitle: "",
  certificationAdress: "",
  certifications: [],
  updateEtitle(value) {
    set((state) => ({
      ...state,
      eTitle: value,
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
});
