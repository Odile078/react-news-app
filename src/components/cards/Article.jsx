const Article = ({ article, firstArticle = false }) => {
  return (
    <div
      className={`flex w-full bg-slate-50 border border-slate-50 hover:bg-slate-100 hover:shadow-md cursor-pointer flex-col justify-between ${
        firstArticle ? "lg:row-span-2 lg:col-span-2 " : ""
      }`}
    >
      <img
        src={article.urlToImage}
        alt=""
        className={`object-cover object-center w-full flex-1 ${
          firstArticle ? "h-32 lg:h-96 " : "h-32"
        }`}
      />
      <div className="p-4 space-y-4 justify-self-end">
        <h5 className="font-bold text-slate-400">
          {article.title?.substring(0, 30)}
        </h5>
        <p className="text-slate-400">{article.description}</p>
      </div>
    </div>
  );
};

export default Article;
