import { FC } from "react";
import { PriceListSelect } from "../components/price-list-select/price-list-select.component";
import { useGetPriceListCategoriesQuery } from "@app/core/types";
import { PriceListTabel } from "../components/price-list-tabel/price-list-tabel.component";

interface PriceListPageProps {}

export const PriceListPage: FC<PriceListPageProps> = () => {
  const { data, loading } = useGetPriceListCategoriesQuery();

  return (
    <div className="px-9 mt-15">
      <div className="mb-24">
        {data && !loading ? <PriceListSelect data={data} /> : <div></div>}
      </div>

      <PriceListTabel />
    </div>
  );
};
