import { NavLink } from "react-router-dom";
import "./ShopParams.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
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
        <li
          className={
            title === "Colors"
              ? "li-col"
              : title === "Categories"
              ? "li-cat"
              : "li-size"
          }
          style={{ textDecoration: !selectedId ? "underline" : "" }}
        >
          All
        </li>
        {items.map((item, index) => (
          <NavLink to={"/categories/" + item._id} className={"navlink"}>
            <li
              key={index}
              className={
                title === "Colors"
                  ? "li-col"
                  : title === "Categories"
                  ? "li-cat"
                  : "li-size"
              }
              style={{
                textDecoration:
                  item._id === selectedId && title !== "Colors"
                    ? "underline"
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
const ShopParams = ({ setSearchQuery, categories, id }) => {
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
  return (
    <div className="products-header">
      {/* <div>
        <label
          htmlFor=""
          style={{
            fontWeight: "500",
            fontSize: "13px",
            padding: "0.5em 1em",
          }}
        >
          sort by
        </label>
        <select
          className="form-control"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="1">Price from high to low</option>
          <option value="2">Price from low to high</option>
          <option value="3">Best sellings</option>
          <option value="4">Best deals</option>
        </select>
      </div> */}
      <div className="search">
        <SearchRoundedIcon className="input-icon" />
        <input
          className="search-input"
          placeholder="product name"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
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
