import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../../features/articlesSlice";

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
      className={`flex w-full bg-slate-50 border border-slate-50 hover:bg-slate-50 hover:shadow-md cursor-pointer gap-2 justify-between ${
        firstArticle ? "lg:row-span-2 lg:col-span-2 " : ""
      } ${smallSize ? "flex-col" : "flex-col"}`}
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
            ? "h-24"
            : "h-40 max-h-40"
        }`}
      />
      <div
        className={`p-4 space-y-4 justify-self-end ${
          firstArticle ? "my-10" : ""
        }`}
      >
        <h5
          className={`${
            smallSize ? "text-sm" : "text-base"
          } font-bold text-slate-400`}
        >
          {smallSize ? article.title?.substring(0, 20) : article.title}
        </h5>

        <p className={`text-slate-400 ${smallSize ? "hidden" : ""}`}>
          {article.description}
        </p>
        <Button action={() => handleSelectArticle(article)}>More</Button>
      </div>
    </div>
  );
};

export default Article;
