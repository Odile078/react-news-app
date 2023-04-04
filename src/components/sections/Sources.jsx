import { useEffect } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { fetchSources } from "../../features/sourcesSlice";

const Sources = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSources());
  }, []);
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold text-slate-700">
        All Available Publishers
      </h1>
      <div className="flex flex-wrap gap-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((article, index) => (
          <Button
            className="w-40 h-16 bg-slate-400"
            key={index}
            active={index === 0 ? true : false}
          >
            {article}
          </Button>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Sources;
