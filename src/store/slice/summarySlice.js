export const summarySlice = (set) => ({
  summary: "",
  updateSummary(value) {
    set((state) => ({
      ...state,
      summary: value,
    }));
  },
});
