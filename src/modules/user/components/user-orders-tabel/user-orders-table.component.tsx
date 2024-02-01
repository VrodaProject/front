import { GetCustomerordersQuery, Orders } from "@app/core/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { table } from "console";
import { DateTime } from "luxon";
import { FC } from "react";

interface UserOrdersTabelProps {
  data: GetCustomerordersQuery["orders"];
  orderStatus: GetCustomerordersQuery["order_status"];
  paymentStatus: GetCustomerordersQuery["payment_status"];
}

const columnHelper = createColumnHelper<GetCustomerordersQuery["orders"][0]>();

export const UserOrdersTabel: FC<UserOrdersTabelProps> = ({
  data,
  orderStatus,
  paymentStatus,
}) => {
  const columns = [
    columnHelper.accessor("created_at", {
      header: "Дата",
      cell: (info) =>
        DateTime.fromISO(info.getValue())
          .setZone("Europe/Kiev")
          .toLocaleString(DateTime.DATETIME_SHORT),
    }),
    columnHelper.accessor("order_items", {
      header: "Опис",
      cell: (info) =>
        info
          .getValue()
          .map((orderItem) => `${orderItem.item?.title} x ${orderItem.amount}`)
          .join(","),
    }),
    columnHelper.accessor("status", {
      header: "Статус замовлення",
      cell: (info) =>
        orderStatus.find((st) => st.id === info.getValue())?.label,
    }),
    columnHelper.accessor("payment_status", {
      header: "Статус оплати",
      cell: (info) =>
        paymentStatus.find((st) => st.id === info.getValue())?.label,
    }),
    columnHelper.accessor("sum", {
      header: "Сума",
      cell: (info) => `${info.getValue()} грн. `,
    }),
  ];

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-t border-b border-gray-200 h-11 text-gray-900 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="font-semibold py-3 px-6 text-left">
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
  );
};
