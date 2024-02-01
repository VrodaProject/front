import { UpdateInfo } from "../components/update-info/update-info.component";
import { UpdateInfoLoading } from "../components/update-info-loading/update-info-loading.component";
import { UpdateInfoFormValues } from "../components/update-info/upadate-info.types";
import { useUpdateCustomerDataMutation } from "@app/core/types";
import { useGetMeDataQuery } from "@app/modules/auth/hooks/use-get-customer-data-query";
import { Container } from "@app/common/components/container/container.component";
import { UserOrdersTabelLoading } from "../components/user-orders-tabel-loading/user-orders-table-loading.component";
import { UserOrders } from "../components/user-orders/user-orders.component";

export const ProfilePage = () => {
  const { data, loading: ProfileDataLoading } = useGetMeDataQuery();

  const [updataCustomerData, { loading: isProfileUpdating }] =
    useUpdateCustomerDataMutation();

  if (ProfileDataLoading) {
    return (
      <Container>
        <UpdateInfoLoading />
        <UserOrdersTabelLoading />
      </Container>
    );
  }

  const onSubmitCallback = async (values: UpdateInfoFormValues) => {
    await updataCustomerData({
      variables: {
        id: data?.id,
        name: values.name || data?.name,
        address: values.address || data?.address,
      },
    });
  };

  return (
    <Container>
      <div className="flex flex-col gap-6">
        <UpdateInfo
          initialValues={data}
          onSubmitCallback={onSubmitCallback}
          isUpdating={isProfileUpdating}
        />
        <UserOrders />
      </div>
    </Container>
  );
};
