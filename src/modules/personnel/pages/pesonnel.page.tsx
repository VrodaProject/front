import { CategpryLinkGroupPersonnel } from "@app/common/components/link-groupt-personnel/link-group-personnel.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";
import { useGetPersonnelQuery } from "@app/core/types";
import { ProductListLoading } from "@app/modules/product/components/product-item-list-loading/product-item-list-loading.component";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { PersonnelCategory } from "../components/personnel-category/personnel-category.component";

interface PersonnelPageProps {}

export const PersonnelPage: FC<PersonnelPageProps> = ({}) => {
  const { data, loading, error } = useGetPersonnelQuery();

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
        <p>Нажаль меню пусте</p>
      </ShowInfo>
    );
  }

  return (
    <div className="my-12">
      <CategpryLinkGroupPersonnel />
      <Helmet>
        <title>Персонал</title>
      </Helmet>
      <div className="flex flex-col gap-12 px-3 sm:px-0">
        {data.personnel_categories.map((category) => (
          <PersonnelCategory data={category} key={`menu-page${category.id}`} />
        ))}
      </div>
    </div>
  );
};
