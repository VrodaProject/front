import { Products_Categories } from "@app/core/types";
import { FC } from "react";
import { ProductList } from "../product-list/product-list.component";

interface ProductCategoryProps {
  data: Omit<Products_Categories, "products_items_aggregate">;
}

export const ProductCategory: FC<ProductCategoryProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-12" id={data.slug}>
      <div className="flex flex-col gap-1 items-center">
        <h2 className="relative after:content-[''] after:block after:absolute after:w-full text-2xl after:h-1 font-bold  after:bg-darkTea">
          {data.title}
        </h2>
      </div>

      <ProductList items={data.products_items} />
    </div>
  );
};
