import { makeVar } from "@apollo/client";

export const cartOpenedState = makeVar(false);

export const toggleCart = () => {
  cartOpenedState(!cartOpenedState());
};

export const openCart = () => {
  cartOpenedState(true);
};

export const closeCart = () => {
  cartOpenedState(false);
};
