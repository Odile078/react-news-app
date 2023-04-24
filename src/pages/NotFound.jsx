import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-700">
          Page not found not found
        </h1>
        <Link
          to="/"
          className="font-bold underline text-slate-500 hover:text-cyan-600"
        >
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
