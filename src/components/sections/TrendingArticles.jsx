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
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <ArticlesList articles={trendingArticles} isLoading={isLoading} />
      {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <ArticleSkeleton
              key={index}
              id={index}
              first={index === 0 ? true : false}
            />
          ))
        ) : trendingArticles?.length !== 0 ? (
          trendingArticles.map((article, index) => (
            <Article
              article={article}
              firstArticle={index === 0 ? true : false}
            />
          ))
        ) : (
          <p className="text-slate-400">No articles found</p>
        )}
      </div> */}
    </div>
  );
};

export default TrendingArticles;
