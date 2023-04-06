import { Outlet } from "react-router-dom";
import Categories from "../sections/Categories";
import Sources from "../sections/Sources";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl px-5 pb-10 space-y-10 lg:mx-auto">
        <Categories />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-3">
            <Outlet />
          </div>
          <div className="">
            <Sources />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
