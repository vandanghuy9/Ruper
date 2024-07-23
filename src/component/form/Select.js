const Select = ({ options, name, register, className, onClick }) => {
  return (
    <>
      <select
        name={name}
        id={name}
        className="form-select"
        {...register(`${name}`)}
        onClick={onClick && onClick}>
        {options.map(({ value, content }, i) => (
          <option value={value} key={i}>
            {content}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
