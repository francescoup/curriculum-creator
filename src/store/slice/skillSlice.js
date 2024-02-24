export const skillSlice = (set) => ({
  skiTitle: "Skill",
  id: Date.now(),
  skill: "",
  skills: [],
  updateSkiTitle(value) {
    set((state) => ({
      ...state,
      skiTitle: value,
    }));
  },
  updateSkill(value) {
    set((state) => ({ ...state, skill: value }));
  },
  addSkills() {
    set((state) => ({
      skills: [
        ...state.skills,
        {
          id: state.id,
          skill: state.skill,
        },
      ],
      id: Date.now(),
      skill: "",
    }));
  },
  removeSkill(id) {
    set((state) => ({
      skills: state.skills.filter((s) => s.id !== id),
    }));
  },
});
