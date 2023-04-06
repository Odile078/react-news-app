import { useEffect } from "react";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources } from "../../features/sourcesSlice";
import ParagraphSkeleton from "../skeletonLoaders/ParagraphSkeleton";

const Sources = () => {
  const { sources, isLoading, errors } = useSelector((state) => state.sources);
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  console.log("sources:", sources, isLoading);
  useEffect(() => {
    dispatch(fetchSources());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-700">
        Available Publishers
      </h1>
      <div className="flex flex-wrap gap-4 ">
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <ParagraphSkeleton key={index} />
          ))
        ) : sources.length !== 0 ? (
          sources.map((article, index) => (
            <Button
              className="w-40 h-16 bg-slate-400 "
              key={index}
              active={index === 0 ? true : false}
            >
              {article?.source.name}
            </Button>
          ))
        ) : (
          <p className="bg-slate-400">No Publishers available</p>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Sources;
