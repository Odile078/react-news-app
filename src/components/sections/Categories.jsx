import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { setSelectedCategory } from "../../features/categories";

const Categories = () => {
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  return (
    <div className="py-4">
      {categories.map((category, index) => (
        <Button
          key={index}
          action={() => dispatch(setSelectedCategory(category))}
          active={selectedCategory === category ? true : false}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
