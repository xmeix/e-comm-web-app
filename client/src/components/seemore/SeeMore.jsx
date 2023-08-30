import "./SeeMore.css";
import { NavLink } from "react-router-dom";
const SeeMore = ({ path }) => {
  return (
    <NavLink to={path} className="see-more">
      See more
    </NavLink>
  );
};

export default SeeMore;
