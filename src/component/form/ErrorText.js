const ErrorText = ({ error }) => {
  return (
    <>
      {error && (
        <span className="input-wrapper" style={{ color: "red" }}>
          This field is required
        </span>
      )}
    </>
  );
};

export default ErrorText;
