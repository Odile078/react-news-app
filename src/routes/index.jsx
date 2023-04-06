import { useRoutes } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../components/pages/Home";
import ArticleDetails from "../components/sections/ArticleDetails";
import GeneralArticles from "../components/sections/GeneralArticles";
import NotFound from "../components/pages/NotFound";

const index = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          exact: true,
        },
        {
          name: "Article contents",
          path: "/news/:articleId",
          exact: true,
          element: <ArticleDetails />,
        },
        {
          name: "Source articles",
          path: "/:sourceName",
          exact: true,
          element: <GeneralArticles />,
        },
        {
          name: "Source Article contents",
          path: "/:sourceName/:articleId",
          exact: true,
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
