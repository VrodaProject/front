import { useReactiveVar } from "@apollo/client";
import { useGetProductsItemsFormCartQuery } from "@app/core/types";

import { cartState } from "@app/modules/cart/store/cart-state";

export const useCartItems = () => {
  const cartItems = useReactiveVar(cartState);

  const { data, previousData, loading } = useGetProductsItemsFormCartQuery({
    variables: {
      productsIds: Object.keys(cartItems),
    },
  });

  return { data, previousData, loading, cartItems };
};
