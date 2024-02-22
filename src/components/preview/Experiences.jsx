import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";
import { useShallow } from "zustand/react/shallow";

const Experiences = () => {
  const { jobTitle, company, from, to, adress, description, jobs } =
    usePersonalInfo(
      useShallow((s) => ({
        jobTitle: s.jobTitle,
        company: s.company,
        from: s.from,
        to: s.to,
        adress: s.adress,
        description: s.description,
        jobs: s.jobs,
      }))
    );
  return (
    <>
      {jobs.length ? (
        <section>
          <Title>ESPERIENZE</Title>
          <div>
            {jobs.map((job, i) => {
              return (
                <div key={i}>
                  <SectionTitle>{job.jobTitle}</SectionTitle>

                  <div className="flex justify-start items-center gap-4 text-gray-700 text-xs">
                    <div className="text-xs">{job.company}</div>
                    <div className="flex gap-1">
                      <span>{job.from}</span>
                      <span>-</span>
                      <span>{job.to}</span>
                    </div>
                    <span>{job.adress}</span>
                  </div>
                  <p className="text-xs text-gray-700">{job.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Experiences;
