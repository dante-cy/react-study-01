import React from "react";
import ProductListItem from "./ProductListItem";

function ProductList({ className }) {
  return (
    <>
      <div className={className}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[10px]">
          <li>
            <ProductListItem imgNo={1} name={"Prodct 1"} price={"100,000"} />
          </li>
          <li>
            <ProductListItem imgNo={2} name={"Prodct 2"} price={"200,000"} />
          </li>
          <li>
            <ProductListItem imgNo={201} name={"Prodct 3"} price={"300,000"} />
          </li>
          <li>
            <ProductListItem imgNo={201} name={"Prodct 4"} price={"300,000"} />
          </li>
          <li>
            <ProductListItem imgNo={201} name={"Prodct 5"} price={"300,000"} />
          </li>
          <li>
            <ProductListItem imgNo={201} name={"Prodct 6"} price={"300,000"} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductList;
