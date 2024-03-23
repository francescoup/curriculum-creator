import Title from "../../atoms/Title";
import SectionTitle from "../../atoms/SectionTitle";
import formatDate from "../../utils/formatDate";
import { usePersonalInfo } from "../../store/useGlobalStore";
import { useShallow } from "zustand/react/shallow";

const Experiences = () => {
  const { jTitle, jobTitle, company, from, to, adress, description, jobs } =
    usePersonalInfo(
      useShallow((s) => ({
        jTitle: s.jTitle,
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
          <Title>{jTitle.toUpperCase()}</Title>
          <div>
            {jobs.map((job, i) => {
              return (
                <div className="mb-2" key={i}>
                  <SectionTitle>{job.jobTitle}</SectionTitle>

                  <div className="flex justify-start items-center gap-4 text-gray-700 text-xs">
                    <div className="text-xs">{job.company}</div>
                    <div className="flex gap-1">
                      <span>{formatDate(job.from)}</span>
                      <span>-</span>
                      <span>{formatDate(job.to)}</span>
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
