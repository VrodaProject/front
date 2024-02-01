import { FC } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { useCloudinaryImage } from "@app/common/hooks/use-cloudinary-image.hook";
import clsx from "clsx";
import { addItemToCart } from "@app/modules/cart/store/cart-state";

interface ProductItemProps {
  image: string;
  weight?: number;
  title: string;
  description?: string | null;
  price: number;
  fitImage?: boolean;
  productId: string;
}

const values = {
  image: "/assets/images/product_item_image.svg",
};

export const ProductItem: FC<ProductItemProps> = ({
  image,
  weight,
  title,
  description,
  price,
  fitImage = true,
  productId,
}) => {
  const transformations = ["w_384", "h_240"];
  if (fitImage) {
    transformations.unshift("c_pad");
  }

  const imageCld = useCloudinaryImage(image, transformations);

  const titleClasses = clsx("text-xl font-semibold", {
    "mb-2": description,
    "mb-8": !description,
  });

  const handleAddToCart = () => {
    addItemToCart(productId);
  };

  return (
    <div className="w-full sm:w-96 shadow-xl rounded-2xl bg-white">
      <div className=" justify-center flex ">
        <AdvancedImage
          cldImg={imageCld}
          width={384}
          height={240}
          className="rounded-t-2xl"
        />
      </div>

      <div className="relative">
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
          {weight} мл
        </span>
      </div>
      <div className="p-8 flex flex-col justify-between ">
        <div>
          <h2 className={titleClasses}>{title}</h2>
          <p className="mb-8">{description}</p>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row gap-3 sm:gap-0">
          <span className="text-xl font-semibold">{price} грн.</span>

          <button
            onClick={handleAddToCart}
            className="bg-darkTea px-4 py-1 rounded-lg text-white"
          >
            Додати до корзини
          </button>
        </div>
      </div>
    </div>
  );
};
