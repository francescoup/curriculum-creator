import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Project = () => {
  const projects = usePersonalInfo((state) => state.projects);
  console.log(projects);
  return (
    <section>
      <Title>PROGETTI</Title>

      {projects.map((p, i) => {
        return (
          <div className="mb-2" key={p.id}>
            <SectionTitle>{p.projectName}</SectionTitle>
            <div className="text-xs text-gray-700">{p.projectDescriptions}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
