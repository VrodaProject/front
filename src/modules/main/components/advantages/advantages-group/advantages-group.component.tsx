import { useGetAdvantagesQuery } from "@app/core/types";
import { FC } from "react";
import { AdvantageItem } from "../advantage-item/advantage-item.component";

interface AdvantagesGroupProps {}

export const AdvantagesGroup: FC<AdvantagesGroupProps> = ({}) => {
  const { data } = useGetAdvantagesQuery();

  return (
    <div className="my-12 flex flex-col items-center gap-16">
      <h1 className="flex justify-center text-6xl text-darkTea  ">Переваги</h1>
      <div className="flex justify-center flex-wrap gap-12">
        {data?.advantages.map((item, index) => (
          <AdvantageItem
            title={item.title}
            label={item.label}
            index={++index}
            key={`${item.id}`}
          />
        ))}
      </div>
      <div className=" h-px w-full sm:w-175 bg-gray-400" />
    </div>
  );
};
