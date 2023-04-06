import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../features/articlesSlice";
import ArticlesList from "../cards/ArticlesList";

const GeneralArticles = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <ArticlesList articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default GeneralArticles;
