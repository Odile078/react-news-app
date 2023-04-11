import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticlesBySource } from "../features/articlesSlice";
import ArticlesList from "../components/cards/ArticlesList";
import { useEffect } from "react";

const SourceArticles = () => {
  const { sourceName } = useParams();
  const { selectedSource } = useSelector((state) => state.sources);
  const { articles, isLoading } = useSelector((state) => state.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesBySource(selectedSource?.id || sourceName));
  }, [selectedSource?.id]);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">
        Latest from {selectedSource?.name || sourceName}
      </h1>
      <div className="space-y-4">
        <ArticlesList articles={articles} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SourceArticles;
