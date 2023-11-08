import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const Shop = () => {
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState(PRODUCTS);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filterdata = PRODUCTS.filter((item) =>
      item.productName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterItem(filterdata);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>
          BLACK AND <span>WHITE</span>
        </h1>
      </div>
      <div className="container">
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={search}
              onChange={handleSearch}
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-icon" />
            </button>
          </form>
        </div>
        <div className="products">
          {filterItem && filterItem.length > 0 ? (
            filterItem.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <img
              src="src/assets/noOrder.jpg"
              alt="Empty List"
              className="noSearch"
            />
          )}
        </div>
      </div>
    </div>
  );
};