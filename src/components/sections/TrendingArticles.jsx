import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticlesList from "../cards/ArticlesList";
import { articlesList } from "../../data/articleSample";
import { fetchTrendingArticles } from "../../features/articlesSlice";

const TrendingArticles = () => {
  const { trendingArticles, isLoading } = useSelector(
    (state) => state.articles
  );
  const { selectedCategory } = useSelector((state) => state.categories);
  const getTrendingArticles = () => {
    dispatch(fetchTrendingArticles());
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getTrendingArticles();
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <ArticlesList articles={trendingArticles} isLoading={isLoading} />
    </div>
  );
};

export default TrendingArticles;
