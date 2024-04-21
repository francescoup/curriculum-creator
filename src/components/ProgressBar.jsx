const ProgressBar = ({ value }) => {
  return (
    <>
      <div className="mb-1 text-xs font-medium dark:text-white">
        {value === 9 ? "100%" : `${value * 11}% `} Completato
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-yellow-400 h-1.5 rounded-full dark:bg-blue-500 transition-all"
          style={{ width: `${value * 11.11}% ` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
