import { IoSearchOutline } from "react-icons/io5";
import ArticlesList from "../components/cards/ArticlesList";
import { useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const SearchArticles = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-6xl px-5 pb-10 space-y-10 lg:mx-auto py-10">
        <div className="flex justify-center">
          <form
            className="flex p-1 px-5 bg-white border rounded-3xl border-slate-500 w-5/6"
            onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              placeholder="search article"
              className="px-1 flex-1 py-2 border-0 outline-none focus:outline-none text-slate-600 placeholder:text-slate-600"
            />
            <button type="button">
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
