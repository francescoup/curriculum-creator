export const educationSlice = (set) => ({
  eTitle: "Istruzione",
  id: Date.now(),
  eduTitle: "",
  eduInstitute: "",
  eduFrom: "",
  eduTo: "",
  eduAdress: "",
  educations: [],
  updateETitle(value) {
    set((state) => ({
      ...state,
      eTitle: value,
    }));
  },
  updateEduTitle(value) {
    set((state) => ({ ...state, eduTitle: value }));
  },
  updateEduInstitute(value) {
    set((state) => ({ ...state, eduInstitute: value }));
  },
  updateEduFrom(value) {
    set((state) => ({ ...state, eduFrom: value }));
  },
  updateEduTo(value) {
    set((state) => ({ ...state, eduTo: value }));
  },
  updateEduAdress(value) {
    set((state) => ({ ...state, eduAdress: value }));
  },

  addEdu() {
    set((state) => ({
      educations: [
        ...state.educations,
        {
          id: state.id,
          eduTitle: state.eduTitle,
          eduInstitute: state.eduInstitute,
          eduFrom: state.eduFrom,
          eduTo: state.eduTo,
          eduAdress: state.eduAdress,
        },
      ],
      id: Date.now(),
      eduTitle: "",
      eduInstitute: "",
      eduFrom: "",
      eduTo: "",
      eduAdress: "",
    }));
  },
  removeEdu(id) {
    set((state) => ({
      jobs: state.educations.filter((e) => e.id !== id),
    }));
  },
});
