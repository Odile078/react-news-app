import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <header className="flex items-center justify-between max-w-5xl px-5 py-4  bg-slate-50 lg:mx-auto">
      <h1 className="text-5xl logo-font">News</h1>
      <form
        className="flex p-1 border rounded-xl border-slate-100"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          placeholder="search article"
          className="px-5 py-2 border-0 outline-none focus:outline-none text-slate-600 placeholder:text-slate-600"
        />
        <button type="button">
          <IoSearchOutline className="text-slate-500" />
        </button>
      </form>
    </header>
  );
};

export default Header;
