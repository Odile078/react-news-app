import { useEffect } from "react";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources, setSelectedSource } from "../../features/sourcesSlice";
import ParagraphSkeleton from "../skeletonLoaders/ParagraphSkeleton";
import { useNavigate } from "react-router-dom";

const Sources = () => {
  const { sources, selectedSource, isLoading, errors } = useSelector(
    (state) => state.sources
  );
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSelectSource = (source) => {
    dispatch(setSelectedSource(source));
    navigate(`/sources/${source.id}`);
  };
  useEffect(() => {
    dispatch(fetchSources());
  }, [selectedCategory]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-700">
        Available Publishers
      </h1>
      <div className="flex flex-wrap gap-4 overflow-y-auto max-h-60 no-scrollbar">
        {isLoading ? (
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <ParagraphSkeleton key={index} />
            ))}
          </div>
        ) : sources.length !== 0 ? (
          sources.map((source, index) => (
            <Button
              key={source?.id ?? index}
              active={source === selectedSource ? true : false}
              action={() => handleSelectSource(source)}
            >
              {source.name}
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
