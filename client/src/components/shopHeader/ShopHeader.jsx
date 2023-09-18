import "./ShopHeader.css";
import { Tooltip } from "@mui/material";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewStreamRoundedIcon from "@mui/icons-material/ViewStreamRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const ShopHeader = ({
  setSearchQuery,
  count,
  setGridView,
  setFilter,
  setOpenParams,
  gridView,
}) => {
  return (
    <div className="shop-header-params">
      <div className="grid">
        {gridView === 1 && (
          <Tooltip title="Settings">
            <GridViewRoundedIcon
              className="shop-settings"
              onClick={() => setGridView(0)}
            />
          </Tooltip>
        )}
        {gridView === 0 && (
          <Tooltip title="Settings">
            <ViewStreamRoundedIcon
              className="shop-settings"
              onClick={() => setGridView(1)}
            />
          </Tooltip>
        )}
      </div>
      <div className="items-count">{count}product(s)</div>

      <div className="sort-filter">
        <div className="search">
          <SearchRoundedIcon className="input-icon" />
          <input
            className="search-input"
            placeholder="product name"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex-column select-group">
          <label htmlFor="" className="input-sticky-label">
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
        </div>
        <Tooltip title="Filter">
          <FilterAltRoundedIcon
            className="shop-settings"
            onClick={() => setOpenParams((prev) => !prev)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default ShopHeader;
