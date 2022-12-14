import React, { lazy } from "react";
import { ProductI, ProductListI } from "../utils/types";
const Product = lazy(() => import("../components/Product"));

function ProductList({ products }: ProductListI) {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product: ProductI) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default ProductList;
