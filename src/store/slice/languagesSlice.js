export const languagesSlice = (set) => ({
  languageTitle: "Lingue",
  id: Date.now(),
  language: "",
  level: "",
  languages: [],
  updateLanguageTitle(value) {
    set((state) => ({
      ...state,
      languageTitle: value,
    }));
  },
  updateLanguage(value) {
    set((state) => ({
      ...state,
      language: value,
    }));
  },
  updateLevel(value) {
    set((state) => ({
      ...state,
      level: value,
    }));
  },
  addLanguage() {
    set((state) => ({
      languages: [
        ...state.languages,
        {
          id: state.id,
          language: state.language,
          level: state.level,
        },
      ],
      id: Date.now(),
      language: "",
      level: "",
    }));
  },
  removeLanguage(id) {
    set((state) => ({
      languages: state.languages.filter((l) => l.id !== id),
    }));
  },
});
