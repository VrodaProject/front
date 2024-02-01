import { ProductItem } from "../product-item/product-item.component";
import { FC } from "react";
import { Prodact } from "./types/pizza";
import { Products } from "@app/core/types";

interface ProductListProps {
  items: Products[];
  title?: string;
}

export const ProductList: FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="flex flex-col items-center px-6 sm:px-0">
      <h1 className="text-6xl text-darkTea font-light mb-10">{title}</h1>
      <div className="flex flex-wrap gap-11 justify-center ">
        {/* Варіант для storybook */}
        {/* {items.map(({ image, ...product }) => (
          <ProductItem
            image={`/assets/images/${image}`}
            {...product}
            key={`product-${product.id}`}
          />
        ))}  */}
        {items.map(({ image, description, ...product }) => (
          <ProductItem
            image={`${image}`}
            description={description}
            {...product}
            productId={product.id}
            key={`product-${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};
