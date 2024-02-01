import { ActionPaper } from "@app/common/components/action-paper/action-paper.component";
import { FC } from "react";
import { UserOrdersTabel } from "../user-orders-tabel/user-orders-table.component";
import { useGetCustomerordersQuery } from "@app/core/types";
import { UserOrdersTabelLoading } from "../user-orders-tabel-loading/user-orders-table-loading.component";

interface UserOrdersProps {}

export const UserOrders: FC<UserOrdersProps> = ({}) => {
  const { data, loading } = useGetCustomerordersQuery();

  return (
    <ActionPaper
      title="Ваші замовлення"
      disableBodyPadding
      disableBottomPadding
    >
      {loading ? (
        <UserOrdersTabelLoading />
      ) : data?.orders.length ? (
        <UserOrdersTabel
          data={data.orders}
          orderStatus={data.order_status}
          paymentStatus={data.payment_status}
        />
      ) : (
        <h1 className="p-6 text-center text-lg">У вас ще немає замовлень</h1>
      )}
    </ActionPaper>
  );
};
