import { NavLink } from "react-router-dom";
import "./ShopParams.css";
import { useEffect, useRef } from "react";
const ParamsList = ({ title, items, selectedId }) => {
  return (
    <div className="params-list">
      <div className="params-list-title">{title}</div>
      <div
        className={
          title === "Colors"
            ? "li-cols"
            : title === "Categories"
            ? "li-cats"
            : "li-sizes"
        }
      >
        <NavLink to={"/categories/"} className={"navlink"}>
          <li
            className={
              title === "Colors"
                ? "li-col"
                : title === "Categories"
                ? "li-cat"
                : "li-size"
            }
            style={{
              border: selectedId === "all" ? "solid 1px var(--black)" : "",
            }}
          >
            All
          </li>
        </NavLink>
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={"/categories/" + item._id}
            className={"navlink"}
          >
            <li
              className={
                title === "Colors"
                  ? "li-col"
                  : title === "Categories"
                  ? "li-cat"
                  : "li-size"
              }
              style={{
                border:
                  item._id === selectedId && title !== "Colors"
                    ? "solid 1px var(--black)"
                    : "",
                backgroundColor: title === "Colors" ? item : "",
              }}
            >
              {title === "Sizes" ? item : item?.name}
            </li>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
const ShopParams = ({ categories, id, setOpenParams }) => {
  const params = useRef(null);
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#800080",
    "#FFA500",
    "#FFC0CB",
    "#A52A2A",
    "#008080",
    "#808080",
  ];
  const handleOutsideClick = (event) => {
    if (params.current && !params.current.contains(event.target)) {
      setOpenParams(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="products-header" ref={params}>
      <ParamsList title="Categories" items={categories} selectedId={id} />
      <ParamsList title="Colors" items={colors} selectedId={id} />
      <ParamsList
        title="Sizes"
        items={["XXl", "Xl", "L", "M", "S", "XS"]}
        selectedId={id}
      />
    </div>
  );
};

export default ShopParams;
