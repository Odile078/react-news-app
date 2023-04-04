import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleSkeleton = ({ id, first = false }) => {
  return (
    <div
      className={`gap-4 bg-white flex w-full border border-slate-50 cursor-pointer flex-col justify-between ${
        id === 0 ? "lg:row-span-2 lg:col-span-2 " : ""
      }`}
    >
      <Skeleton className={` ${id === 0 ? "h-32 lg:h-96 " : "h-32"}`} />
      <div className="space-y-4">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </div>
  );
};

export default ArticleSkeleton;
