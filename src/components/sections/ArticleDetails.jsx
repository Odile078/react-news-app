import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ArticleDetails = () => {
  const { selectedArticle } = useSelector((state) => state.articles);
  const navigate = useNavigate();
  const handleNavigateBack = () => navigate(-1);
  return (
    <div className="py-10 space-y-10">
      <button
        onClick={handleNavigateBack}
        className="text-base text-cyan-700 hover:underline"
      >
        back
      </button>
      <div className="space-y-6 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <img
            src={selectedArticle.urlToImage ?? ""}
            className="object-cover object-center rounded-xl"
          />
          <div className="space-y-3 sm:order-first">
            <p className="text-sm text-slate-500">
              {selectedArticle?.publishedAt?.substring(0, 10)}
            </p>
            <h3 className="font-bold text-slate-700">
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
