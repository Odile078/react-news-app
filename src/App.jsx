import Header from "./components/layout/Header";
import Categories from "./components/sections/Categories";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-5xl px-5 lg:mx-auto">
        <Categories />
      </main>
    </>
  );
}

export default App;
