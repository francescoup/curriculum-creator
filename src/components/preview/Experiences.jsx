import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";

const Experiences = () => {
  const state = usePersonalInfo();
  return (
    <>
      {state.jobs.length ? (
        <section>
          <Title>ESPERIENZE</Title>
          <div>
            {state.jobs.map((job, i) => {
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
