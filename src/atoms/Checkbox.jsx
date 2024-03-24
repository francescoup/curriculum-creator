const Checkbox = ({ name, label, onChange, value }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="w-full inline-flex items-center cursor-pointer text-gray-400 text-xs"
      >
        {label}

        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        <span className="ms-2 text-gray-400 text-xs">In corso</span>
      </label>
    </>
  );
};

export default Checkbox;
