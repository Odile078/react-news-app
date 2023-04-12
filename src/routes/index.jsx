import { useRoutes } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../pages/Home";
import ArticleDetails from "../components/sections/ArticleDetails";
import NotFound from "../pages/NotFound";
import SourceArticles from "../pages/SourceArticles";
import SearchArticles from "../pages/SearchArticles";
const index = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          name: "Home page",
          index: true,
          element: <Home />,
        },
        {
          name: "Article contents",
          path: "news/:articleId",
          element: <ArticleDetails />,
        },
        {
          name: "Source articles",
          path: "sources/:sourceName",
          element: <SourceArticles />,
        },
        {
          name: "Source Article contents",
          path: "sources/:sourceName/:articleId",
          element: <ArticleDetails />,
        },
      ],
    },
    { name: "Search page", path: "/search", element: <SearchArticles /> },
    { name: "404 page", path: "*", element: <NotFound /> },
  ]);
  return <>{routes}</>;
};

export default index;
