export const summarySlice = (set) => ({
  summaryTitle: "Descrizione",
  summary: "",
  updateSummaryTitle(value) {
    set((state) => ({
      ...state,
      summaryTitle: value,
    }));
  },
  updateSummary(value) {
    set((state) => ({
      ...state,
      summary: value,
    }));
  },
});
