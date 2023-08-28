import CategoryLine from "../../components/categoryLine/CategoryLine";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <VideoPlayer />
      {/* CHOSEN CATEGORY */}
      <CategoryLine _id="1" />
      {/* BEST SELLERS PRODUCTS */}
      {/* ALL CATEGORIES : FIRST 4 PRODUCTS + VIEW MORE LINK */}
    </div>
  );
};

export default Categories;
