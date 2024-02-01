import { FC } from "react";
import { ProductItemLoading } from "../product-item-loading/products-item-loading.component";

interface ProductListLoding {
  items: number;
}

export const ProductListLoading: FC<ProductListLoding> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {new Array(items).fill(1).map((v, index) => {
        return <ProductItemLoading key={`menu-loading-${index}`} />;
      })}
    </div>
  );
};
