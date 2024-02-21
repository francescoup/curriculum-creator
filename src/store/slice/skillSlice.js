export const skillSlice = (set) => ({
  id: Date.now(),
  skill: "",
  skills: [],
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
