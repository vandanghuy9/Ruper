const Label = ({ htmlFor = "", content, required }) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        {content}
        {required ? (
          <span className="required" title="required">
            *
          </span>
        ) : (
          <span className="optional">(optional)</span>
        )}
      </label>
    </>
  );
};

export default Label;
