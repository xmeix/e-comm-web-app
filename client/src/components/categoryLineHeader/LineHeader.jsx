import "./LineHeader.css";
import SeeMore from "../seemore/SeeMore";

const LineHeader = ({ path, title }) => {
  return (
    <div className="line-header">
      <div className="line-title">{title}</div>
      <SeeMore path={path} />
    </div>
  );
};

export default LineHeader;
