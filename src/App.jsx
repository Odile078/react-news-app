import Header from "./components/layout/Header";
import Categories from "./components/sections/Categories";
import Sources from "./components/sections/Sources";
import TrendingArticles from "./components/sections/TrendingArticles";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl px-5 pb-10 space-y-10 lg:mx-auto">
        <Categories />
        <TrendingArticles />
        <Sources />
      </main>
      <Footer />
    </>
  );
}

export default App;
