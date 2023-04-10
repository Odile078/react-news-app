import { Outlet } from "react-router-dom";
import Categories from "../sections/Categories";
import Sources from "../sections/Sources";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-6xl px-5 pb-10 space-y-10 lg:mx-auto">
        <Categories />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-3">
            <Outlet />
          </div>
          <div className="">
            <Sources />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
