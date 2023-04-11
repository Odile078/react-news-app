import { Link } from "react-router-dom";
import { TbSpeakerphone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full max-w-6xl px-5 py-10 bg-slate-200 lg:mx-auto">
      <Link to="/" className="flex items-end gap-2">
        <h1 className="text-3xl logo-font">News</h1>
        <TbSpeakerphone className="text-4xl" />
      </Link>
    </footer>
  );
};

export default Footer;
