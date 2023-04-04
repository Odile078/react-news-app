import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingArticles } from "../../features/trendingArticlesSlice";
import ArticleSkeleton from "../skeletonLoaders/ArticleSkeleton";

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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
            <div
              key={article.id || index}
              className={`flex w-full bg-slate-50 border border-slate-50 hover:bg-slate-100 hover:shadow-md cursor-pointer flex-col justify-between ${
                index === 0 ? "lg:row-span-2 lg:col-span-2 " : ""
              }`}
            >
              <img
                src={article.urlToImage}
                alt=""
                className={`object-cover object-center w-full flex-1 ${
                  index === 0 ? "h-32 lg:h-96 " : "h-32"
                }`}
              />
              <div className="p-4 space-y-4 justify-self-end">
                <h5 className="font-bold text-slate-400">
                  {article.title?.substring(0, 30)}
                </h5>
                <p className="text-slate-400">{article.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No articles found</p>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default TrendingArticles;
