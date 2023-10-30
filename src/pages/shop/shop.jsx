import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>
                    BLACK AND <span>WHITE</span>
                </h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};