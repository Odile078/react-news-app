import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/articlesSlice";
import ArticlesList from "../cards/ArticlesList";
import { articlesList } from "../../data/articleSample";

const GeneralArticles = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const { selectedCategory } = useSelector((state) => state.categories);
  const newArticles =
    !isLoading && articles?.length !== 0 ? articles : articlesList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <ArticlesList articles={newArticles} isLoading={isLoading} />
    </div>
  );
};

export default GeneralArticles;
