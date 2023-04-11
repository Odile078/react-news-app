import ArticleSkeleton from "../skeletonLoaders/ArticleSkeleton";
import Article from "./Article";

const ArticlesList = ({ articles, isLoading, listTitle }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <ArticleSkeleton
            key={index}
            id={index}
            first={index === 0 ? true : false}
          />
        ))
      ) : articles?.length !== 0 ? (
        articles.map((article, index) => (
          <Article
            key={article.id}
            article={article}
            firstArticle={index === 0 ? true : false}
          />
        ))
      ) : (
        <p className="text-slate-400">No articles found</p>
      )}
    </div>
  );
};

export default ArticlesList;
