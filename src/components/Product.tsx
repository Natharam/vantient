import React from "react";
import { ProductI } from "../utils/types";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

function Product({ product }: { product?: ProductI }) {
  const navigate = useNavigate();

  return (
    <>
      {product ? (
        <div className="rounded overflow-hidden shadow-lg cursor-pointer" role="product-item" onClick={() => navigate('/products')}>
          <i className="fa fa-FiFileText"></i>
          <img className="w-full h-48" src={product.images} alt="Mountain" />
          <div className="p-3">
            <div className="flex justify-left items-center">
              <FaFileAlt />
              <div className="font-bold text-xl ml-2">{product.title}</div>
            </div>
            <div className="pt-2 flex justify-start">
              {product.primaryTag.map((tag) => (
                <div
                  className="inline-block bg-green-100 rounded-md px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit truncate"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="pt-2 flex justify-start">
              {product.secondaryTag.map((tag) => (
                <div
                  className="inline-block bg-orange-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {product.privilege.map((privilege, index) => (
            <p className="text-gray-700 text-base text-sm truncate px-3 pb-3">
              {index + 1}. {privilege}
            </p>
          ))}
        </div>
      ) : undefined}
    </>
  );
}

export default Product;
