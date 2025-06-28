const FormWrapper = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};
export default FormWrapper;
