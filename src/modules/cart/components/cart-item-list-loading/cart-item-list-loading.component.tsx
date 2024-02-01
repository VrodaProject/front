import { CartItemLoading } from "../cart-item-loading/cart-item-loading.component";

export const CartitemListLoading = () => {
  const items = new Array(2).fill(1);
  return (
    <div className="flex flex-col gap-6">
      {items.map((v, index) => {
        return <CartItemLoading key={`cart-item-loading-${index}`} />;
      })}
    </div>
  );
};
