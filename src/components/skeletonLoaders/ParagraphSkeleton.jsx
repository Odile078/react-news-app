import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ParagraphSkeleton = () => {
  return (
    <div className="space-y-4 bg-white">
      <Skeleton className="w-32 h-6" />
    </div>
  );
};

export default ParagraphSkeleton;
