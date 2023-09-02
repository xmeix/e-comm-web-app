import "./ShopParams.css";
const ShopParams = ({ prodNum, setFilter, setSearchQuery }) => {
  return (
    <div className="products-header">
      <div className="prodnum">{prodNum + " products"} </div>
      <div
        style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}
      >
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
      </div>
      <div className="search">
        <label
          htmlFor=""
          style={{
            fontWeight: "500",
            fontSize: "13px",
            padding: "0.5em 1em",
          }}
        >
          search for
        </label>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
    </div>
  );
};

export default ShopParams;
