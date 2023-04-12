import { Link, useNavigate } from "react-router-dom";
import { TbSpeakerphone } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { clearArticles } from "../../features/articlesSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickSearch = () => {
    dispatch(clearArticles());
    navigate("/search");
  };
  return (
    <header className="flex flex-wrap items-center justify-between w-full max-w-6xl gap-4 px-5 py-4 bg-slate-200 lg:mx-auto">
      <Link to="/" className="flex items-end gap-2">
        <h1 className="text-3xl logo-font">News</h1>
        <TbSpeakerphone className="text-4xl" />
      </Link>
      <button onClick={handleClickSearch}>
        <IoIosSearch className="text-slate-800 text-2xl" />
      </button>
    </header>
  );
};

export default Header;
