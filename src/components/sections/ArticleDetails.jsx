import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import defaultArticleImg from "../../assets/images/pexels-photo-518543.jpeg";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useEffect } from "react";
const ArticleDetails = () => {
  const { selectedArticle } = useSelector((state) => state.articles);
  const navigate = useNavigate();
  const handleNavigateBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="py-10 space-y-10">
      <button
        onClick={handleNavigateBack}
        className="flex items-end gap-1 text-base text-cyan-700 hover:underline"
      >
        <HiOutlineArrowNarrowLeft /> <p>back</p>
      </button>
      <div className="space-y-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <img
            src={selectedArticle.urlToImage ?? defaultArticleImg}
            className="object-cover object-center h-full rounded-xl md:col-span-2"
          />
          <div className="py-2 space-y-3 sm:order-first">
            <p className="text-sm text-slate-500">
              {selectedArticle?.publishedAt?.substring(0, 10)}
            </p>
            <h3 className="text-4xl font-bold text-slate-700">
              {selectedArticle.title}
            </h3>
            <div>
              <p className="text-sm text-slate-500">Publisher</p>
              <p className="text-sm text-cyan-700">{selectedArticle.author}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 md:w-4/5">
          <p className="text-slate-700">{selectedArticle.description ?? ""}</p>
          <p className="text-slate-700">
            {selectedArticle.content ?? selectedArticle.description ?? ""}
          </p>
          <Link to={selectedArticle.url} className="text-base text-cyan-600">
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
