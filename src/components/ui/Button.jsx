const Button = ({ children, active = false, action = () => null }) => {
  return (
    <button
      className={`px-5 py-2 text-base hover:bg-slate-500 hover:text-white ${
        active ? "bg-slate-500 text-white" : "text-slate-800 bg-slate-100"
      }`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
