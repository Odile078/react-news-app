// export const scrollToTop = () =>
//   Window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
import { useEffect } from "react";

function ScrollToTop() {
  const toTop = () => Window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  useEffect(() => {
    toTop();
  }, []);
  return toTop;
}

export default ScrollToTop;
