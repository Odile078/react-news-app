import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchArticlesBySource } from "../../features/articlesSlice";
import ArticlesList from "../cards/ArticlesList";

const GeneralArticles = () => {
  const { articles, isLoading } = useSelector((state) => state.articles);
  const { selectedCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchArticlesBySource());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <ArticlesList articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default GeneralArticles;
