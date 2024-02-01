import { useGetAdvantagesQuery } from "@app/core/types";
import { FC } from "react";

interface AdvantageItemProps {
  title: string;
  label: string;
  index: number;
}

export const AdvantageItem: FC<AdvantageItemProps> = ({
  title,
  label,
  index,
}) => {
  return (
    <div className="flex items-center lg:items-start gap-4 w-full lg:w-105 flex-col lg:flex-row ">
      <div className="flex items-center  lg:flex-row flex-col">
        <span className="text-4xl text-darkTea">{`0${index}`}</span>
        <div className=" lg:h-px lg:w-8 h-8 w-px  bg-black" />
      </div>
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <p className="text-3xl">{title}</p>
        <span className="text-lg text-gray-500">{label}</span>
      </div>
    </div>
  );
};
