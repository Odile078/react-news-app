import GeneralArticles from "../components/sections/GeneralArticles";
import { useParams } from "react-router-dom";

const SourceArticles = () => {
  const { sourceName } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">
        Latest from {sourceName}
      </h1>
      <GeneralArticles />
    </div>
  );
};

export default SourceArticles;
