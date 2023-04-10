import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../../features/articlesSlice";

const Article = ({ article, firstArticle = false }) => {
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
      className={`flex w-full bg-slate-50 border border-slate-50 hover:bg-slate-100 hover:shadow-md cursor-pointer flex-col justify-between ${
        firstArticle ? "lg:row-span-2 lg:col-span-2 " : ""
      }`}
    >
      <img
        src={
          article.urlToImage ??
          "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt=""
        className={`object-cover object-center w-full flex-1  ${
          firstArticle
            ? "h-40 lg:h-96  max-h-40 lg:max-h-full"
            : "h-40 max-h-40"
        }`}
      />
      <div className="p-4 space-y-4 justify-self-end">
        <h5 className="font-bold text-slate-400">
          {article.title?.substring(0, 30)}
        </h5>
        <p className="text-slate-400">{article.description}</p>
        <Button action={() => handleSelectArticle(article)}>More</Button>
      </div>
    </div>
  );
};

export default Article;
