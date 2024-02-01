import { useGetCategoriesQuery, useGetProductQuery } from "@app/core/types";
import { ProductList } from "../components/product-list/product-list.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";
import { ProductListLoading } from "../components/product-item-list-loading/product-item-list-loading.component";
import { Helmet } from "react-helmet";
import { ProductCategory } from "../components/product-category/product-category.component";
import { CategpryLinkGroup } from "@app/common/components/link-groupt/link-group.component";

export const ProductPage = () => {
  const { data, loading, error } = useGetProductQuery();

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
    <div className="my-12 flex flex-col gap-0 sm:gap-20 ">
      <CategpryLinkGroup />
      <Helmet>
        <title>Товари</title>
      </Helmet>

      <div className="flex flex-col gap-12 ">
        {data.products_categories.map((category) => (
          <ProductCategory data={category} key={`menu-page${category.id}`} />
        ))}
      </div>
    </div>
  );
};
