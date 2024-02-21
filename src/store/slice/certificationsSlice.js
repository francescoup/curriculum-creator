export const certificationsSlice = (set) => ({
  id: Date.now(),
  certicationTitle: "",
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

  //   addCertifications() {
  //     set((state) => ({
  //       certifications: [
  //         ...state.certifications,
  //         {
  //           id: state.id,
  //           certicationTitle: state.certicationTitle,
  //           certificacionAdress: state.certicationAdress,
  //         },
  //       ],
  //       id: Date.now(),
  //       certicationTitle: "",
  //       certificacionAdress: "",
  //       certifications: [],
  //     }));
  //   },
});
