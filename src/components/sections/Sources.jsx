import { useEffect } from "react";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources, setSelectedSource } from "../../features/sourcesSlice";
import ParagraphSkeleton from "../skeletonLoaders/ParagraphSkeleton";
import { sourcesList } from "../../data/sourceSample";
import { useNavigate } from "react-router-dom";

const Sources = () => {
  const { sources, isLoading, errors } = useSelector((state) => state.sources);
  const { selectedCategory } = useSelector((state) => state.categories);
  const newSources =
    !isLoading && sources?.length !== 0 ? sources : sourcesList;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSelectSource = (category) => {
    dispatch(setSelectedSource(category));
    navigate(`/sources/${category}`);
  };
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
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <ParagraphSkeleton key={index} />
            ))}
          </div>
        ) : newSources.length !== 0 ? (
          newSources.map((article, index) => (
            <Button
              key={index}
              active={index === 0 ? true : false}
              action={() => handleSelectSource(article?.source.name)}
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
