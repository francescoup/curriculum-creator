import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Project = () => {
  const projects = usePersonalInfo((s) => s.projects);
  const proTitle = usePersonalInfo((s) => s.proTitle);
  const projectLink = usePersonalInfo((s) => s.projectLink);

  return (
    <section>
      <Title>{proTitle.toUpperCase()}</Title>

      {projects.map((p, i) => {
        return (
          <div className="mb-2" key={p.id}>
            <SectionTitle>{p.projectName}</SectionTitle>
            <a
              className="text-xs text-gray-700"
              href={`https://${p.projectLink}`}
            >
              {p.projectLink}
            </a>
            <div className="text-xs text-gray-700">{p.projectDescriptions}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Project;
