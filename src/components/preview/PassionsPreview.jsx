import React from "react";
import { usePersonalInfo } from "../../store/useGlobalStore";
import Title from "../../atoms/Title";

const PassionsPreview = () => {
  const passions = usePersonalInfo((s) => s.passions);
  const pasTitle = usePersonalInfo((s) => s.pasTitle);

  return (
    <>
      {passions.lengtn ? (
        <section>
          <Title>{pasTitle.toUpperCase()}</Title>

          <div className="w-full flex flex-wrap gap-2">
            {passions.map((p, i) => {
              return (
                <span
                  className="  py-2 px-1 border-b border-indigo-400 text-xs"
                  key={p.id}
                >
                  {p.passion}
                </span>
              );
            })}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PassionsPreview;
