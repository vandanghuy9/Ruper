const ErrorText = ({ error, message = "This field is required" }) => {
  return (
    <>
      {error && (
        <span className="input-wrapper" style={{ color: "red" }}>
          {message}
        </span>
      )}
    </>
  );
};

export default ErrorText;
