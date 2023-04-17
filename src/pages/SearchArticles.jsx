import { IoSearchOutline } from "react-icons/io5";
import ArticlesList from "../components/cards/ArticlesList";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";
import {
  clearArticles,
  searchArticlesByKeyword,
} from "../features/articlesSlice";

const SearchArticles = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleChangeSearchText = (e) => setSearchText(e.target.value);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!searchText?.trim()) return;
    dispatch(searchArticlesByKeyword(searchText));
  };
  useEffect(() => {
    return () => dispatch(clearArticles());
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-7xl px-5 pb-10 space-y-10 lg:min-w-[1024px] lg:mx-auto py-10">
        <div className="flex justify-center">
          <form
            className="flex p-1 px-5 bg-white border rounded-3xl border-slate-500 w-5/6"
            onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              placeholder="search article"
              className="px-1 flex-1 py-2 border-0 outline-none focus:outline-none text-slate-600 placeholder:text-slate-600"
              onChange={handleChangeSearchText}
            />
            <button type="button" onClick={handleSubmitForm}>
              <IoSearchOutline className="text-slate-500" />
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <ArticlesList articles={articles} isLoading={isLoading} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchArticles;
