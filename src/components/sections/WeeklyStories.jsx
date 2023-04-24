import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesByWeek } from "../../features/articlesSlice";
import { useEffect } from "react";
import ArticleSkeleton from "../skeletonLoaders/ArticleSkeleton";
import Article from "../cards/Article";

const WeeklyStories = () => {
  const { weeklyArticles, isLoading } = useSelector((state) => state.articles);
  const { selectedSource } = useSelector((state) => state.sources);

  const dispatch = useDispatch();
  const getWeeklyArticles = () => {
    dispatch(fetchArticlesByWeek());
  };
  useEffect(() => {
    getWeeklyArticles();
  }, [selectedSource?.id]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-700">Weekly Stories </h1>
      <div className="grid grid-cols-1 gap-3">
        {isLoading ? (
          [1, 2, 3, 4, 5].map((item, index) => (
            <ArticleSkeleton
              key={index}
              id={index}
              first={index === 0 ? true : false}
            />
          ))
        ) : weeklyArticles?.length !== 0 ? (
          weeklyArticles.map((article) => (
            <Article
              key={article.id}
              article={article}
              firstArticle={false}
              smallSize={true}
            />
          ))
        ) : (
          <p className="text-slate-400">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default WeeklyStories;
