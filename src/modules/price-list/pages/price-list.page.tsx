import { FC } from "react";
import { PriceListSelect } from "../components/price-list-select/price-list-select.component";
import {
  useGetPriceListCategoriesQuery,
  useGetPriceListQuery,
} from "@app/core/types";
import { PriceListTabel } from "../components/price-list-tabel/price-list-tabel.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";

interface PriceListPageProps {}

export const PriceListPage: FC<PriceListPageProps> = () => {
  const { data, loading } = useGetPriceListCategoriesQuery();
  const {
    data: DataPriceList,
    loading: LoadginPriceList,
    error,
  } = useGetPriceListQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Упс, спалася помилка</p>
        <p>Спробуйте трохи пізніше</p>
      </ShowInfo>
    );
  }

  if (loading) {
    return (
      <ShowInfo type="info">
        <p>loading</p>
      </ShowInfo>
    );
  }

  if (!DataPriceList?.price_list_categories) {
    return (
      <ShowInfo type="info">
        <p>Нажаль тут пусто</p>
      </ShowInfo>
    );
  }

  return (
    <div className="px-9 mt-15">
      <div className="mb-24">
        {data && !loading ? <PriceListSelect data={data} /> : <div></div>}
      </div>

      {DataPriceList && !LoadginPriceList ? (
        <PriceListTabel data={DataPriceList} />
      ) : (
        <div />
      )}
    </div>
  );
};
