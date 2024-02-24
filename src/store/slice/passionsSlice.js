export const passionlice = (set) => ({
  pasTitle: "Passioni",
  id: Date.now(),
  passion: "",
  passions: [],
  updatePasTitle(value) {
    set((state) => ({
      ...state,
      pasTitle: value,
    }));
  },
  updatePassion(value) {
    set((state) => ({ ...state, passion: value }));
  },
  addPassions() {
    set((state) => ({
      passions: [
        ...state.passions,
        {
          id: state.id,
          passion: state.passion,
        },
      ],
      id: Date.now(),
      passion: "",
    }));
  },
  removePassions(id) {
    set((state) => ({
      passions: state.passions.filter((s) => s.id !== id),
    }));
  },
});
