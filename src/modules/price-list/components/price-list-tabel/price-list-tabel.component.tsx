import { useReactiveVar } from "@apollo/client";
import { FC, useEffect, useState } from "react";
import { priceListCurrent } from "../../store/price-list-state";
import {
  GetPriceListCategoryByIdQuery,
  useGetPriceListQuery,
} from "@app/core/types";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";

interface PriceListTabelProps {}

const columnHelper =
  createColumnHelper<GetPriceListCategoryByIdQuery["price_list"][0]>();

export const PriceListTabel: FC<PriceListTabelProps> = ({}) => {
  const { data: DataPriceList, loading } = useGetPriceListQuery();
  const selection = useReactiveVar(priceListCurrent);
  const [foundObject, setFoundObject] = useState(
    DataPriceList?.price_list_categories[0]?.price_list_items || []
  );

  useEffect(() => {
    const foundObject_local = DataPriceList?.price_list_categories.find(
      (item) => item.id === priceListCurrent()
    );

    if (foundObject_local !== undefined) {
      setFoundObject(foundObject_local.price_list_items);
    }
  }, [priceListCurrent(), selection]);

  const columns = [
    columnHelper.accessor("title", {
      header: "Назва",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("price", {
      header: "Ціна",
      cell: (info) => `${info.getValue()} грн.`,
    }),
  ];

  const table = useReactTable({
    data: foundObject,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {foundObject.length !== 0 || loading ? (
        <table className="w-full ">
          <thead className="bg-gray-50 border-t border-b border-gray-200 h-11 text-gray-900 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="font-semibold py-3 px-6 text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white text-gray-900 text-sm">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-200">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-6">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center">
          <h1 className="text-2xl">Тут поки пусто🥲</h1>
        </div>
      )}
    </div>
  );
};
