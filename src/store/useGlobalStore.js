import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createJobsSlice } from "./slice/jobsSlice";
import { skillSlice } from "./slice/skillSlice";
import { educationSlice } from "./slice/educationSlice";
import { projectSlice } from "./slice/projectSlice";
import { summarySlice } from "./slice/summarySlice";
import { linkSlice } from "./slice/linkSlice";
import { certificationsSlice } from "./slice/certificationsSlice";
import { personalInfoSlice } from "./slice/personalInfoSlice";
import { passionlice } from "./slice/passionsSlice";
import { styleSlice } from "./slice/styleSile";
import { languagesSlice } from "./slice/languagesSlice";

export const useStore = create(
  persist(
    (set, get) => ({
      step: 0,
      addStep: () => set((state) => ({ step: state.step + 1 })),
      downStep: () => set((state) => ({ step: state.step - 1 })),
    }),
    {
      name: "pageState",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const usePersonalInfo = create((set) => ({
  ...styleSlice(set),
  ...personalInfoSlice(set),
  ...createJobsSlice(set),
  ...educationSlice(set),
  ...skillSlice(set),
  ...projectSlice(set),
  ...summarySlice(set),
  ...linkSlice(set),
  ...certificationsSlice(set),
  ...passionlice(set),
  ...languagesSlice(set),
  resumes: [],

  addResume() {
    set((state) => ({
      resumes: [
        ...state.resumes,
        { fullname: state.fullName, jobs: state.jobs },
      ],
      id: Date.now(),
    }));
  },
}));
