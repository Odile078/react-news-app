import { useRoutes } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../pages/Home";
import ArticleDetails from "../components/sections/ArticleDetails";
import NotFound from "../pages/NotFound";
import SourceArticles from "../pages/SourceArticles";

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
    { name: "404 page", path: "*", element: <NotFound /> },
  ]);
  return <>{routes}</>;
};

export default index;
{
  /* <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} exact />
          <Route
            name="Article contents"
            path="/news/:articleId"
            exact
            element={<ArticleDetails />}
          />
          <Route
            name="Source articles"
            path="/:sourceName"
            exact
            element={<GeneralArticles />}
          />
          <Route
            name="Source Article contents"
            path="/:sourceName/:articleId"
            exact
            element={<ArticleDetails />}
          />
          <Route name="404 page" path="*" element={<NotFound />} />
        </Route>
        <Route name="404 page" path="*" element={<NotFound />} />
      </Routes> */
}
