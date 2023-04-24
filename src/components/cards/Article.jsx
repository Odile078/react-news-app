import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../../features/articlesSlice";
import { format } from "date-fns";

const Article = ({ article, firstArticle = false, smallSize = false }) => {
  const { sourceName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelectArticle = (selectedArticle) => {
    dispatch(setSelectedArticle(article));
    sourceName
      ? navigate(
          `/sources/:${sourceName}/${
            selectedArticle.id || selectedArticle.title
          }`
        )
      : navigate(`/news/${selectedArticle.id || selectedArticle.title}`);
  };
  return (
    <div
      className={`flex w-full bg-slate-50 border border-slate-50 hover:bg-slate-100 hover:shadow-md cursor-pointer gap-2 justify-between ${
        firstArticle ? "lg:row-span-2 lg:col-span-2 " : ""
      } ${smallSize ? "flex-col" : "flex-col"}`}
      onClick={() => handleSelectArticle(article)}
    >
      <img
        src={
          article.urlToImage ??
          "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt=""
        className={`object-cover object-center w-full flex-1 border-0 border-transparent ${
          firstArticle
            ? "h-40 lg:h-96  max-h-40 lg:max-h-full"
            : smallSize
            ? "h-16"
            : "h-40 max-h-40"
        }`}
      />
      <div
        className={`p-4 space-y-4 justify-self-end ${
          firstArticle ? "my-10-" : ""
        }`}
      >
        <div>
          <h5
            className={`${
              smallSize ? "text-sm" : "text-base"
            } font-bold text-slate-400`}
          >
            {article.title ? ` ${article.title?.substring(0, 60)}...` : ""}
          </h5>
          <p className="pb-2 text-sm text-slate-400">
            {article?.publishedAt?.substring(0, 10)}
          </p>
        </div>

        {/* <p className={`text-slate-400 ${smallSize ? "hidden" : ""}`}>
          {article.description}
        </p> */}
        <button
          onClick={() => handleSelectArticle(article)}
          className="text-sm font-bold text-cyan-700"
        >
          Continue reading
        </button>
      </div>
    </div>
  );
};

export default Article;
