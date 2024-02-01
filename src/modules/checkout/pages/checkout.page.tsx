import { ActionPaper } from "@app/common/components/action-paper/action-paper.component";
import { Container } from "@app/common/components/container/container.component";
import { FC, useEffect } from "react";
import { CartList } from "@app/modules/cart/components/cart-list/cart-list.component";
import { useReactiveVar } from "@apollo/client";
import { cartState, cleanCart } from "@app/modules/cart/store/cart-state";
import { toast } from "react-toastify";
import { useGetMeDataQuery } from "@app/modules/auth/hooks/use-get-customer-data-query";
import { CheckoutForm } from "../checkout-form/checkout-form.component";
import { CheckoutFormValues } from "../checkout-form/checkout-form.types";
import { useCreateOrderMutation } from "@app/core/types";
import { useNavigate } from "react-router-dom";

export interface CheckoutPageProps {}

export const CheckoutPage: FC<CheckoutPageProps> = () => {
  const cart = useReactiveVar(cartState);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      navigate("/products", { replace: true });
    }
  }, [cart]);

  const [createOrderMutation] = useCreateOrderMutation();
  const handlerCheckoutSubmit = async (values: CheckoutFormValues) => {
    console.log(values);

    const items = Object.keys(cart)
      .map((cartId) => {
        return `${cartId}_${cart[cartId]}`;
      })
      .join(",");

    const newOrder = await createOrderMutation({
      variables: {
        client_address: values.address,
        client_name: values.name,
        client_phone: values.phoneNumber,
        items: items,
        payment_type: values.paymentType,
        comment: values.comment,
      },
    });

    cleanCart();

    if (newOrder.data?.createOrder?.checkout_url) {
      window.location.href = newOrder.data.createOrder.checkout_url;
      return;
    }

    navigate("/checkout/thank-you", { replace: true });
  };

  const { data } = useGetMeDataQuery();

  return (
    <Container>
      <ActionPaper title="Замовлення">
        <div className="flex gap-19 flex-col lg:flex-row ">
          <div className="flex-1">
            <CheckoutForm
              submitCallback={handlerCheckoutSubmit}
              initialValues={data}
            />
          </div>
          <div className="flex-1">
            <CartList disableScroll cartSumItemPosition="top" />
          </div>
        </div>
      </ActionPaper>
    </Container>
  );
};
