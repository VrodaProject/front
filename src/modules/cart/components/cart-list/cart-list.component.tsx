import { CartitemListLoading } from "../cart-item-list-loading/cart-item-list-loading.component";
import { CartItem } from "../cart-item/cart-item.component";
import { FC, ReactNode } from "react";
import clsx from "clsx";
import { useCartItems } from "@app/modules/checkout/hooks/use-cart-items";

enum CartSumItemPosition {
  top = "top",
  bottom = "bottom",
}
interface CartListProps {
  appendix?: ReactNode;
  disableScroll?: boolean;
  cartSumItemPosition?: keyof typeof CartSumItemPosition;
}

export const CartList: FC<CartListProps> = ({
  appendix,
  disableScroll = false,
  cartSumItemPosition = CartSumItemPosition.bottom,
}) => {
  const { data, previousData, loading, cartItems } = useCartItems();

  if (!data && !previousData && loading) {
    return <CartitemListLoading />;
  }

  const wapperClasses = clsx("flex gap-6 flex-col ", {
    "h-[calc(100%_-_3.25rem)]": !disableScroll,
  });

  const listWrapperClasses = clsx("flex gap-6 flex-col", {
    "overflow-y-auto": !disableScroll,
  });

  const cartSumItemClasses = clsx(
    "text-right text-sm font-medium text-gray-900",
    {
      "border-t border-gray-200 pt-6":
        cartSumItemPosition === CartSumItemPosition.bottom,
    }
  );

  const cartSum =
    data?.products.reduce((acc, val) => {
      return acc + val.price * cartItems[val.id];
    }, 0) ?? 0;

  const cartSumItem = (
    <div className={cartSumItemClasses}>Усього: {cartSum} грн</div>
  );

  return (
    <div className={wapperClasses}>
      {cartSumItemPosition === CartSumItemPosition.top && cartSumItem}
      <div className={listWrapperClasses}>
        {(data || previousData)?.products.map((item) => (
          <CartItem
            {...item}
            count={cartItems[item.id]}
            menuItemId={item.id}
            key={`cart-item-${item.id}`}
          />
        ))}
      </div>
      {cartSumItemPosition === CartSumItemPosition.bottom && cartSumItem}
      {appendix}
    </div>
  );
};
