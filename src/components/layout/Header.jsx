import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbSpeakerphone } from "react-icons/tb";

const Header = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <header className="flex flex-wrap items-center justify-between w-full max-w-6xl gap-4 px-5 py-4 bg-slate-200 lg:mx-auto">
      <Link to="/" className="flex items-end gap-2">
        <h1 className="text-3xl logo-font">News</h1>
        <TbSpeakerphone className="text-4xl" />
      </Link>
      <form
        className="flex p-1 px-2 bg-white border rounded-lh border-slate-100"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          placeholder="search article"
          className="px-1 py-2 border-0 outline-none focus:outline-none text-slate-600 placeholder:text-slate-600"
        />
        <button type="button">
          <IoSearchOutline className="text-slate-500" />
        </button>
      </form>
    </header>
  );
};

export default Header;
