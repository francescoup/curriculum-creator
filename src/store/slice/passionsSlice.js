export const passionlice = (set) => ({
  id: Date.now(),
  passion: "",
  passions: [],
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
