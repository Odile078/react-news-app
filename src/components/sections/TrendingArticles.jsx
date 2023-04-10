import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingArticles } from "../../features/trendingArticlesSlice";
import ArticleSkeleton from "../skeletonLoaders/ArticleSkeleton";
import Article from "../cards/Article";
import ArticlesList from "../cards/ArticlesList";

const TrendingArticles = () => {
  const { trendingArticles, isLoading } = useSelector(
    (state) => state.trendingArticles
  );
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <ArticlesList articles={trendingArticles} isLoading={isLoading} />
    </div>
  );
};

export default TrendingArticles;
