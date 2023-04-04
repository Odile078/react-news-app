import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingArticles } from "../../features/trendingArticlesSlice";

const TrendingArticles = () => {
  const { trendingArticles, isLoading } = useSelector(
    (state) => state.trendingArticles
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingArticles());
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">Trending </h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((article, index) =>
          index === 0 ? (
            <div
              key={index}
              className="w-full h-32 lg:row-span-3 bg-slate-400 lg:col-span-2 lg:h-96"
            ></div>
          ) : (
            <div key={index} className="h-32 bg-slate-400"></div>
          )
        )}
        <div></div>
      </div>
    </div>
  );
};

export default TrendingArticles;
