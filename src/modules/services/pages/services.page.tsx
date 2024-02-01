import { CategpryLinkGroupPersonnel } from "@app/common/components/link-groupt-personnel/link-group-personnel.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";
import {
  useGetPersonnelCategoriesQuery,
  useGetPersonnelQuery,
  useGetServicesQuery,
} from "@app/core/types";
import { ProductListLoading } from "@app/modules/product/components/product-item-list-loading/product-item-list-loading.component";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { SerivcesList } from "../components/services-list/services-list.component";

interface PersonnelPageProps {}

export const ServiceslPage: FC<PersonnelPageProps> = ({}) => {
  const { data, loading, error } = useGetServicesQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Упс, спалася помилка</p>
        <p>Спробуйте трохи пізніше</p>
      </ShowInfo>
    );
  }

  if (loading) {
    return <ProductListLoading items={9} />;
  }

  if (!data) {
    return (
      <ShowInfo type="info">
        <p>Нажаль тут пусто</p>
      </ShowInfo>
    );
  }

  return (
    <div className="my-12">
      <Helmet>
        <title>Послуги</title>
      </Helmet>
      <div className="flex flex-col gap-12 px-3 sm:px-0">
        <SerivcesList items={data.services} />
      </div>
    </div>
  );
};
