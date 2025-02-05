import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Project = () => {
  const projects = usePersonalInfo((s) => s.projects);
  const proTitle = usePersonalInfo((s) => s.proTitle);
  const projectLink = usePersonalInfo((s) => s.projectLink);

  return (
    <>
      {projects.length ? (
        <section>
          <Title>{proTitle.toUpperCase()}</Title>

          {projects.map((p, i) => {
            return (
              <div key={p.id}>
                <SectionTitle>{p.projectName}</SectionTitle>
                <div>
                  <div className="text-xs text-gray-700">
                    {p.projectDescriptions}
                  </div>
                  <a
                    className="text-xs text-gray-700"
                    href={`https://${p.projectLink}`}
                  >
                    {p.projectLink}
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      ) : null}
    </>
  );
};

export default Project;
